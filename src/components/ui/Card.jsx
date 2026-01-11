// src/components/ui/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Reusable Card Component
 * Flexible card component for services, products, team members, testimonials, etc.
 */
const Card = ({
    title,
    subtitle,
    description,
    image,
    icon: Icon,
    link,
    linkText = 'Learn More',
    tags = [],
    footer,
    variant = 'default', // 'default', 'service', 'product', 'team', 'testimonial', 'blog'
    className = '',
    onClick,
    children,
}) => {
    const baseClasses = 'bg-[#1c1f24] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#1ba6d6]/50 hover:shadow-xl hover:shadow-[#1ba6d6]/10';
    
    const variantStyles = {
        default: 'p-6',
        service: 'p-8',
        product: 'p-6',
        team: 'text-center',
        testimonial: 'p-8',
        blog: 'p-0',
    };

    const CardContent = () => (
        <>
            {/* Image */}
            {image && (
                <div className={`${variant === 'blog' ? 'h-48' : 'h-40'} overflow-hidden ${variant === 'blog' ? '' : 'rounded-xl mb-6'}`}>
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            )}

            {/* Icon */}
            {Icon && !image && (
                <div className="mb-6">
                    <div className="w-16 h-16 bg-[#1ba6d6]/10 rounded-xl flex items-center justify-center">
                        <Icon size={32} className="text-[#1ba6d6]" />
                    </div>
                </div>
            )}

            <div className={variant === 'blog' ? 'p-6' : ''}>
                {/* Subtitle/Category */}
                {subtitle && (
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-[#1ba6d6] mb-2">
                        {subtitle}
                    </p>
                )}

                {/* Title */}
                {title && (
                    <h3 className="text-xl font-black text-white mb-3 tracking-tight">
                        {title}
                    </h3>
                )}

                {/* Description */}
                {description && (
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {description}
                    </p>
                )}

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-white/5 text-[0.65rem] font-bold text-gray-400 uppercase tracking-wider rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Custom Children */}
                {children}

                {/* Link */}
                {link && (
                    <Link
                        to={link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#1ba6d6] hover:text-white transition-colors mt-4"
                    >
                        {linkText}
                        <span>→</span>
                    </Link>
                )}

                {/* Footer */}
                {footer && (
                    <div className="mt-6 pt-4 border-t border-white/5">
                        {footer}
                    </div>
                )}
            </div>
        </>
    );

    const cardClasses = `${baseClasses} ${variantStyles[variant]} ${className}`;

    if (onClick) {
        return (
            <motion.div
                className={`${cardClasses} cursor-pointer`}
                onClick={onClick}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
            >
                <CardContent />
            </motion.div>
        );
    }

    return (
        <motion.div
            className={cardClasses}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <CardContent />
        </motion.div>
    );
};

export default Card;
