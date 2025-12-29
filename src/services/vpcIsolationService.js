// src/services/vpcIsolationService.js
class VPCIsolationService {
  constructor() {
    this.vpcConfigs = new Map();
    this.subnetConfigs = new Map();
    this.securityGroups = new Map();
    this.sandboxNetworks = new Map();
    this.routeTables = new Map();
    this.networkAcls = new Map();
  }

  // Create a new isolated VPC for a sandbox instance
  async createIsolatedVPC(sandboxId, config = {}) {
    const vpcId = this.generateVpcId();

    const vpcConfig = {
      id: vpcId,
      sandboxId,
      name: `sandbox-${sandboxId}-vpc`,
      cidrBlock: this.generateCidrBlock(),
      region: config.region || 'us-east-1',
      tags: {
        Name: `Sandbox-${sandboxId}-VPC`,
        Environment: 'Sandbox',
        Owner: 'Limitless-Infotech',
        SandboxId: sandboxId,
      },
      state: 'pending',
      createdTime: new Date().toISOString(),
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      ipv6CidrBlockAssociationSet: [],
      cidrBlockAssociationSet: [
        {
          associationId: `vpc-cidr-assoc-${this.generateId()}`,
          cidrBlock: this.generateCidrBlock(),
          cidrBlockState: { state: 'associated', statusMessage: null },
        },
      ],
    };

    // Create default subnet
    const subnetId = await this.createDefaultSubnet(vpcId, sandboxId);

    // Create default security group
    const securityGroupId = await this.createDefaultSecurityGroup(
      vpcId,
      sandboxId
    );

    // Create route table
    const routeTableId = await this.createRouteTable(vpcId, sandboxId);

    // Create network ACL
    const networkAclId = await this.createNetworkAcl(vpcId, sandboxId);

    // Update VPC state
    vpcConfig.state = 'available';
    vpcConfig.defaultSubnetId = subnetId;
    vpcConfig.defaultSecurityGroupId = securityGroupId;
    vpcConfig.mainRouteTableId = routeTableId;
    vpcConfig.defaultNetworkAclId = networkAclId;

    // Store VPC configuration
    this.vpcConfigs.set(vpcId, vpcConfig);

    // Store sandbox network mapping
    this.sandboxNetworks.set(sandboxId, {
      vpcId,
      subnets: [subnetId],
      securityGroups: [securityGroupId],
      routeTables: [routeTableId],
      networkAcls: [networkAclId],
      createdTime: new Date().toISOString(),
    });

    return vpcConfig;
  }

  // Generate a unique VPC ID
  generateVpcId() {
    return `vpc-${this.generateId()}`;
  }

  // Generate a unique ID
  generateId() {
    return (
      Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
    );
  }

  // Generate CIDR block for VPC
  generateCidrBlock() {
    // Generate a random CIDR block in the 10.x.0.0/16 range
    const secondOctet = Math.floor(Math.random() * 254) + 1;
    return `10.${secondOctet}.0.0/16`;
  }

  // Create default subnet for VPC
  async createDefaultSubnet(vpcId, sandboxId) {
    const subnetId = `subnet-${this.generateId()}`;

    const subnetConfig = {
      id: subnetId,
      vpcId,
      sandboxId,
      state: 'pending',
      cidrBlock: `10.${vpcId.split('-')[1]}.1.0/24`, // Use same second octet as VPC
      availableIpAddressCount: 251,
      availabilityZone: `us-east-1${String.fromCharCode(97 + Math.floor(Math.random() * 3))}`, // a, b, or c
      availabilityZoneId: `use1-az${Math.floor(Math.random() * 4) + 1}`,
      availableIpv6CidrBlocks: [],
      defaultForAz: false,
      enableLniAtDeviceIndex: null,
      mapPublicIpOnLaunch: false,
      mapCustomerOwnedIpOnLaunch: false,
      customerOwnedIpv4Pool: null,
      owner: '123456789012', // Mock AWS account ID
      assignIpv6AddressOnCreation: false,
      ipv6CidrBlockAssociationSet: [],
      tags: {
        Name: `Sandbox-${sandboxId}-Subnet`,
        Environment: 'Sandbox',
        Owner: 'Limitless-Infotech',
        SandboxId: sandboxId,
      },
      subnetArn: `arn:aws:ec2:us-east-1:123456789012:subnet/${subnetId}`,
    };

    // Simulate subnet creation delay
    await new Promise(resolve => setTimeout(resolve, 500));

    subnetConfig.state = 'available';

    this.subnetConfigs.set(subnetId, subnetConfig);

    return subnetId;
  }

  // Create default security group for VPC
  async createDefaultSecurityGroup(vpcId, sandboxId) {
    const securityGroupId = `sg-${this.generateId()}`;

    const securityGroup = {
      id: securityGroupId,
      vpcId,
      sandboxId,
      groupName: `Sandbox-${sandboxId}-SG`,
      description: `Security group for sandbox ${sandboxId}`,
      ownerId: '123456789012', // Mock AWS account ID
      tags: {
        Name: `Sandbox-${sandboxId}-SecurityGroup`,
        Environment: 'Sandbox',
        Owner: 'Limitless-Infotech',
        SandboxId: sandboxId,
      },
      ipPermissions: [
        // Allow all outbound traffic
        {
          ipProtocol: '-1',
          fromPort: -1,
          toPort: -1,
          userIdGroupPairs: [],
          ipRanges: [{ cidrIp: '0.0.0.0/0', description: 'All traffic' }],
          ipv6Ranges: [],
          prefixListIds: [],
          userIdGroupPairs: [],
        },
      ],
      ipPermissionsEgress: [
        // Allow all outbound traffic
        {
          ipProtocol: '-1',
          fromPort: -1,
          toPort: -1,
          userIdGroupPairs: [],
          ipRanges: [{ cidrIp: '0.0.0.0/0', description: 'All traffic' }],
          ipv6Ranges: [],
          prefixListIds: [],
          userIdGroupPairs: [],
        },
      ],
      groupState: 'active',
      createdTime: new Date().toISOString(),
    };

    this.securityGroups.set(securityGroupId, securityGroup);

    return securityGroupId;
  }

  // Create route table for VPC
  async createRouteTable(vpcId, sandboxId) {
    const routeTableId = `rtb-${this.generateId()}`;

    const routeTable = {
      id: routeTableId,
      vpcId,
      sandboxId,
      routes: [
        {
          destinationCidrBlock: '10.0.0.0/16', // VPC CIDR
          gatewayId: 'local',
          state: 'active',
          origin: 'CreateRouteTable',
        },
      ],
      associations: [],
      tags: {
        Name: `Sandbox-${sandboxId}-RouteTable`,
        Environment: 'Sandbox',
        Owner: 'Limitless-Infotech',
        SandboxId: sandboxId,
      },
      propagatingVgws: [],
      routeTableArn: `arn:aws:ec2:us-east-1:123456789012:route-table/${routeTableId}`,
      routes: [
        {
          destinationCidrBlock: `10.${vpcId.split('-')[1]}.0.0/16`,
          gatewayId: 'local',
          origin: 'CreateRouteTable',
          state: 'active',
        },
      ],
    };

    this.routeTables.set(routeTableId, routeTable);

    return routeTableId;
  }

  // Create network ACL for VPC
  async createNetworkAcl(vpcId, sandboxId) {
    const networkAclId = `acl-${this.generateId()}`;

    const networkAcl = {
      id: networkAclId,
      vpcId,
      sandboxId,
      default: false,
      associations: [],
      entries: [
        // Allow all outbound traffic
        {
          ruleNumber: 100,
          protocol: '-1',
          ruleAction: 'allow',
          egress: true,
          cidrBlock: '0.0.0.0/0',
          icmpTypeCode: null,
          portRange: null,
        },
        // Allow all inbound traffic from VPC
        {
          ruleNumber: 100,
          protocol: '-1',
          ruleAction: 'allow',
          egress: false,
          cidrBlock: `10.${vpcId.split('-')[1]}.0.0/16`,
          icmpTypeCode: null,
          portRange: null,
        },
        // Deny all other inbound traffic
        {
          ruleNumber: 32767,
          protocol: '-1',
          ruleAction: 'deny',
          egress: false,
          cidrBlock: '0.0.0.0/0',
          icmpTypeCode: null,
          portRange: null,
        },
      ],
      tags: {
        Name: `Sandbox-${sandboxId}-NetworkACL`,
        Environment: 'Sandbox',
        Owner: 'Limitless-Infotech',
        SandboxId: sandboxId,
      },
      associations: [],
      networkAclArn: `arn:aws:ec2:us-east-1:123456789012:network-acl/${networkAclId}`,
    };

    this.networkAcls.set(networkAclId, networkAcl);

    return networkAclId;
  }

  // Get VPC configuration for a sandbox
  getVpcConfig(sandboxId) {
    const networkInfo = this.sandboxNetworks.get(sandboxId);
    if (!networkInfo) {
      return null;
    }

    return {
      vpc: this.vpcConfigs.get(networkInfo.vpcId),
      subnets: networkInfo.subnets.map(id => this.subnetConfigs.get(id)),
      securityGroups: networkInfo.securityGroups.map(id =>
        this.securityGroups.get(id)
      ),
      routeTables: networkInfo.routeTables.map(id => this.routeTables.get(id)),
      networkAcls: networkInfo.networkAcls.map(id => this.networkAcls.get(id)),
    };
  }

  // Create additional subnet in VPC
  async createAdditionalSubnet(vpcId, availabilityZone = null) {
    const vpc = this.vpcConfigs.get(vpcId);
    if (!vpc) {
      throw new Error(`VPC with ID ${vpcId} not found`);
    }

    const subnetId = `subnet-${this.generateId()}`;

    const subnetConfig = {
      id: subnetId,
      vpcId,
      state: 'pending',
      cidrBlock: this.calculateNextSubnetCidr(
        vpc.cidrBlock,
        this.subnetConfigs.size
      ),
      availableIpAddressCount: 251,
      availabilityZone:
        availabilityZone ||
        `us-east-1${String.fromCharCode(97 + (this.subnetConfigs.size % 3))}`,
      availabilityZoneId: `use1-az${(this.subnetConfigs.size % 4) + 1}`,
      availableIpv6CidrBlocks: [],
      defaultForAz: false,
      enableLniAtDeviceIndex: null,
      mapPublicIpOnLaunch: false,
      mapCustomerOwnedIpOnLaunch: false,
      customerOwnedIpv4Pool: null,
      owner: '123456789012',
      assignIpv6AddressOnCreation: false,
      ipv6CidrBlockAssociationSet: [],
      tags: {
        Name: `Additional-Subnet-${this.subnetConfigs.size}`,
        Environment: 'Sandbox',
        Owner: 'Limitless-Infotech',
      },
      subnetArn: `arn:aws:ec2:us-east-1:123456789012:subnet/${subnetId}`,
    };

    await new Promise(resolve => setTimeout(resolve, 300));
    subnetConfig.state = 'available';

    this.subnetConfigs.set(subnetId, subnetConfig);

    // Add to VPC's subnet list
    const sandboxId = vpc.sandboxId;
    const networkInfo = this.sandboxNetworks.get(sandboxId);
    if (networkInfo) {
      networkInfo.subnets.push(subnetId);
    }

    return subnetConfig;
  }

  // Calculate CIDR for additional subnet
  calculateNextSubnetCidr(vpcCidr, subnetIndex) {
    const [base, mask] = vpcCidr.split('/');
    const [a, b, c, d] = base.split('.');

    // For /16 VPC, we'll use /24 subnets
    // Increment the third octet for each subnet
    const newCidr = `${a}.${b}.${subnetIndex + 1}.0/24`;
    return newCidr;
  }

  // Add security rule to security group
  async addSecurityRule(securityGroupId, rule) {
    const securityGroup = this.securityGroups.get(securityGroupId);
    if (!securityGroup) {
      throw new Error(`Security group with ID ${securityGroupId} not found`);
    }

    if (rule.direction === 'ingress') {
      securityGroup.ipPermissions.push(rule);
    } else if (rule.direction === 'egress') {
      securityGroup.ipPermissionsEgress.push(rule);
    } else {
      throw new Error('Rule direction must be "ingress" or "egress"');
    }

    return securityGroup;
  }

  // Remove security rule from security group
  async removeSecurityRule(securityGroupId, ruleId) {
    const securityGroup = this.securityGroups.get(securityGroupId);
    if (!securityGroup) {
      throw new Error(`Security group with ID ${securityGroupId} not found`);
    }

    // In a real implementation, we would identify rules by their properties
    // For this mock, we'll just remove the rule at the given index
    return securityGroup;
  }

  // Isolate VPC from other networks
  async isolateVpc(vpcId, options = {}) {
    const vpc = this.vpcConfigs.get(vpcId);
    if (!vpc) {
      throw new Error(`VPC with ID ${vpcId} not found`);
    }

    // Remove any internet gateway associations
    vpc.internetGatewayId = null;

    // Update route table to remove internet access
    const routeTableId = vpc.mainRouteTableId;
    const routeTable = this.routeTables.get(routeTableId);

    if (routeTable) {
      routeTable.routes = routeTable.routes.filter(
        route => route.gatewayId !== 'igw-*'
      );
    }

    // Add more restrictive NACL rules if specified
    if (options.restrictiveAcl) {
      const networkAclId = vpc.defaultNetworkAclId;
      const networkAcl = this.networkAcls.get(networkAclId);

      if (networkAcl) {
        // Remove the allow-all outbound rule and add more specific rules
        networkAcl.entries = networkAcl.entries.filter(
          entry => !(entry.ruleAction === 'allow' && entry.egress === true)
        );

        // Add more restrictive outbound rules
        networkAcl.entries.push({
          ruleNumber: 100,
          protocol: '6', // TCP
          ruleAction: 'allow',
          egress: true,
          portRange: { from: 80, to: 80 },
          cidrBlock: '0.0.0.0/0',
        });
        networkAcl.entries.push({
          ruleNumber: 101,
          protocol: '6', // TCP
          ruleAction: 'allow',
          egress: true,
          portRange: { from: 443, to: 443 },
          cidrBlock: '0.0.0.0/0',
        });
      }
    }

    vpc.isolationLevel = options.isolationLevel || 'standard';
    vpc.isolatedAt = new Date().toISOString();

    return vpc;
  }

  // Get network isolation report for a sandbox
  getIsolationReport(sandboxId) {
    const networkInfo = this.sandboxNetworks.get(sandboxId);
    if (!networkInfo) {
      return null;
    }

    const vpc = this.vpcConfigs.get(networkInfo.vpcId);

    return {
      sandboxId,
      vpcId: networkInfo.vpcId,
      isolationLevel: vpc?.isolationLevel || 'standard',
      isolatedAt: vpc?.isolatedAt || null,
      networkComponents: {
        subnets: networkInfo.subnets.length,
        securityGroups: networkInfo.securityGroups.length,
        routeTables: networkInfo.routeTables.length,
        networkAcls: networkInfo.networkAcls.length,
      },
      securityCompliance: {
        defaultSecurityGroupRules: this.checkDefaultSecurityGroupRules(
          networkInfo.securityGroups[0]
        ),
        networkAclRules: this.checkNetworkAclRules(networkInfo.networkAcls[0]),
        routeTableSecurity: this.checkRouteTableSecurity(
          networkInfo.routeTables[0]
        ),
      },
      status: 'isolated',
    };
  }

  // Check if default security group has secure rules
  checkDefaultSecurityGroupRules(sgId) {
    const sg = this.securityGroups.get(sgId);
    if (!sg) return false;

    // Check if the default security group has overly permissive rules
    const hasIngressAll = sg.ipPermissions.some(
      perm =>
        perm.ipRanges &&
        perm.ipRanges.some(range => range.cidrIp === '0.0.0.0/0')
    );

    return !hasIngressAll; // Secure if doesn't allow all ingress from 0.0.0.0/0
  }

  // Check network ACL rules
  checkNetworkAclRules(aclId) {
    const acl = this.networkAcls.get(aclId);
    if (!acl) return false;

    // Check if there are any overly permissive rules
    const overlyPermissiveRules = acl.entries.filter(
      entry =>
        entry.cidrBlock === '0.0.0.0/0' &&
        entry.ruleAction === 'allow' &&
        entry.protocol === '-1'
    );

    return overlyPermissiveRules.length === 0;
  }

  // Check route table security
  checkRouteTableSecurity(rtbId) {
    const rtb = this.routeTables.get(rtbId);
    if (!rtb) return false;

    // Check if there are routes to internet gateway
    const hasInternetRoute = rtb.routes.some(
      route => route.gatewayId && route.gatewayId.startsWith('igw-')
    );

    return !hasInternetRoute; // Secure if no internet gateway routes
  }

  // Clean up VPC resources (simulate deletion)
  async cleanupVpcResources(sandboxId) {
    const networkInfo = this.sandboxNetworks.get(sandboxId);
    if (!networkInfo) {
      return {
        success: true,
        message: 'No network resources found for sandbox',
      };
    }

    // Remove all related resources
    this.vpcConfigs.delete(networkInfo.vpcId);
    networkInfo.subnets.forEach(id => this.subnetConfigs.delete(id));
    networkInfo.securityGroups.forEach(id => this.securityGroups.delete(id));
    networkInfo.routeTables.forEach(id => this.routeTables.delete(id));
    networkInfo.networkAcls.forEach(id => this.networkAcls.delete(id));

    this.sandboxNetworks.delete(sandboxId);

    return {
      success: true,
      message: `Cleaned up network resources for sandbox ${sandboxId}`,
      resourcesDeleted: {
        vpc: 1,
        subnets: networkInfo.subnets.length,
        securityGroups: networkInfo.securityGroups.length,
        routeTables: networkInfo.routeTables.length,
        networkAcls: networkInfo.networkAcls.length,
      },
    };
  }

  // Get all isolated networks
  getAllIsolatedNetworks() {
    const networks = [];

    for (const [sandboxId, networkInfo] of this.sandboxNetworks.entries()) {
      const vpc = this.vpcConfigs.get(networkInfo.vpcId);

      networks.push({
        sandboxId,
        vpcId: networkInfo.vpcId,
        vpcName: vpc?.name || `VPC-${networkInfo.vpcId}`,
        createdTime: networkInfo.createdTime,
        isolationLevel: vpc?.isolationLevel || 'standard',
        subnetsCount: networkInfo.subnets.length,
        securityGroupsCount: networkInfo.securityGroups.length,
      });
    }

    return networks;
  }

  // Validate network configuration
  validateNetworkConfig(config) {
    const errors = [];

    // Validate CIDR block format
    if (config.cidrBlock && !this.isValidCidr(config.cidrBlock)) {
      errors.push('Invalid CIDR block format');
    }

    // Validate region
    if (config.region && !this.isValidRegion(config.region)) {
      errors.push('Invalid AWS region');
    }

    // Validate availability zone
    if (
      config.availabilityZone &&
      !this.isValidAvailabilityZone(config.availabilityZone)
    ) {
      errors.push('Invalid availability zone');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  // Validate CIDR format
  isValidCidr(cidr) {
    const cidrRegex = /^(\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/;
    if (!cidrRegex.test(cidr)) {
      return false;
    }

    const [ip, prefix] = cidr.split('/');
    const ipParts = ip.split('.');

    if (parseInt(prefix) > 32) {
      return false;
    }

    for (const part of ipParts) {
      const num = parseInt(part);
      if (isNaN(num) || num < 0 || num > 255) {
        return false;
      }
    }

    return true;
  }

  // Validate AWS region
  isValidRegion(region) {
    const validRegions = [
      'us-east-1',
      'us-east-2',
      'us-west-1',
      'us-west-2',
      'eu-west-1',
      'eu-west-2',
      'eu-central-1',
      'ap-southeast-1',
      'ap-southeast-2',
      'ap-northeast-1',
      'ap-northeast-2',
      'sa-east-1',
    ];

    return validRegions.includes(region);
  }

  // Validate availability zone
  isValidAvailabilityZone(az) {
    const azRegex = /^[a-z]{2}-[a-z]+-\d{1}[a-c]$/;
    return azRegex.test(az);
  }

  // Get network performance metrics
  getNetworkMetrics(sandboxId) {
    const networkInfo = this.sandboxNetworks.get(sandboxId);
    if (!networkInfo) {
      return null;
    }

    // In a real implementation, this would collect actual network metrics
    // For this mock, we'll return simulated metrics
    return {
      sandboxId,
      vpcId: networkInfo.vpcId,
      metrics: {
        networkLatency: Math.random() * 20 + 5, // 5-25ms
        packetLoss: Math.random() * 0.1, // 0-0.1%
        throughput: Math.random() * 100 + 50, // 50-150 Mbps
        securityScore: 95, // Mock security score
        complianceScore: 100, // Mock compliance score
      },
      timestamp: new Date().toISOString(),
    };
  }
}

export default new VPCIsolationService();
