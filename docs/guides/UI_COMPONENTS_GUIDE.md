# UI Components Guide

This guide provides comprehensive documentation for all the UI components available in the Limitless Infotech Solution design system. These components are built with accessibility, performance, and scalability in mind.

## Table of Contents

1. [Introduction](#introduction)
2. [Component Categories](#component-categories)
3. [Interactive Navigation Components](#interactive-navigation-components)
   - [Breadcrumb](#breadcrumb)
   - [Pagination](#pagination)
   - [BackToTop](#backtotop)
   - [Search](#search)
4. [Implementation Examples](#implementation-examples)
5. [Accessibility Features](#accessibility-features)
6. [Best Practices](#best-practices)

## Introduction

Our UI component library provides a collection of reusable, accessible, and performant components that follow modern design principles. All components are built with TypeScript and React, utilizing forwardRef for proper ref handling and accessibility attributes for WCAG AA compliance.

## Component Categories

1. **Navigation Components**: Breadcrumb, Pagination, BackToTop, Search
2. **Layout Components**: Card, Divider, Accordion, Tabs
3. **Feedback Components**: Notification, Toast, Tooltip
4. **Input Components**: Button, Input, TextArea, Select
5. **Display Components**: Badge, Progress, Image, Skeleton

## Interactive Navigation Components

### Breadcrumb

Breadcrumbs provide a way to navigate up the hierarchy of pages or sections.

#### Props

| Prop      | Type            | Default      | Description              |
| --------- | --------------- | ------------ | ------------------------ |
| children  | React.ReactNode | -            | Breadcrumb items         |
| className | string          | ''           | Additional CSS classes   |
| separator | React.ReactNode | Chevron icon | Custom separator element |

#### BreadcrumbItem Props

| Prop      | Type            | Default | Description            |
| --------- | --------------- | ------- | ---------------------- |
| children  | React.ReactNode | -       | Item content           |
| href      | string          | -       | Link destination       |
| isCurrent | boolean         | false   | Indicates current page |
| className | string          | ''      | Additional CSS classes |

#### Usage Example

```tsx
import { Breadcrumb, BreadcrumbItem } from '../components/ui';
import { HiHome } from 'react-icons/hi';

<Breadcrumb>
  <BreadcrumbItem href="/">
    <HiHome className="w-4 h-4 mr-1" />
    Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem isCurrent>TrackIT</BreadcrumbItem>
</Breadcrumb>;
```

### Pagination

Pagination allows users to navigate through large sets of data across multiple pages.

#### Props

| Prop          | Type                   | Default | Description                                     |
| ------------- | ---------------------- | ------- | ----------------------------------------------- |
| currentPage   | number                 | -       | Current page number                             |
| totalPages    | number                 | -       | Total number of pages                           |
| onPageChange  | (page: number) => void | -       | Callback when page changes                      |
| className     | string                 | ''      | Additional CSS classes                          |
| siblingCount  | number                 | 1       | Number of pages to show on each side of current |
| showFirstLast | boolean                | true    | Show first/last page buttons                    |

#### Usage Example

```tsx
import { Pagination } from '../components/ui';

const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10;

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>;
```

### BackToTop

BackToTop provides a convenient way for users to scroll back to the top of a page.

#### Props

| Prop      | Type            | Default      | Description                           |
| --------- | --------------- | ------------ | ------------------------------------- |
| threshold | number          | 300          | Scroll distance before showing button |
| smooth    | boolean         | true         | Enable smooth scrolling               |
| className | string          | ''           | Additional CSS classes                |
| children  | React.ReactNode | ArrowUp icon | Custom content                        |

#### Usage Example

```tsx
import { BackToTop } from '../components/ui';

// Component is self-contained and automatically handles visibility
<BackToTop />

// With custom threshold and content
<BackToTop threshold={500}>
  <HiArrowUp className="w-6 h-6" />
</BackToTop>
```

### Search

Search provides a styled input field for search functionality with clear and submit capabilities.

#### Props

| Prop        | Type                                             | Default     | Description            |
| ----------- | ------------------------------------------------ | ----------- | ---------------------- |
| placeholder | string                                           | 'Search...' | Placeholder text       |
| value       | string                                           | -           | Controlled input value |
| onChange    | (e: React.ChangeEvent<HTMLInputElement>) => void | -           | Change handler         |
| onClear     | () => void                                       | -           | Clear button handler   |
| onSubmit    | (value: string) => void                          | -           | Form submit handler    |
| className   | string                                           | ''          | Additional CSS classes |
| variant     | 'default' \| 'filled' \| 'outlined'              | 'default'   | Input style variant    |
| size        | 'sm' \| 'md' \| 'lg'                             | 'md'        | Input size             |
| disabled    | boolean                                          | false       | Disable input          |
| autoFocus   | boolean                                          | false       | Auto focus on mount    |

#### Usage Example

```tsx
import { Search } from '../components/ui';

const [searchValue, setSearchValue] = useState('');

<Search
  placeholder="Search products..."
  value={searchValue}
  onChange={e => setSearchValue(e.target.value)}
  onClear={() => setSearchValue('')}
  onSubmit={value => console.log('Searching for:', value)}
  variant="filled"
  size="lg"
/>;
```

## Implementation Examples

### Using Breadcrumbs in a Product Page

```tsx
// In Products.jsx
import { Breadcrumb, BreadcrumbItem } from '../components/ui';
import { HiHome } from 'react-icons/hi';

const ProductsPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem href="/">
          <HiHome className="w-4 h-4 mr-1" />
          Home
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>Products</BreadcrumbItem>
      </Breadcrumb>

      {/* Rest of page content */}
    </div>
  );
};
```

### Adding Pagination to a List Page

```tsx
// In a blog listing page
import { Pagination } from '../components/ui';
import { useState } from 'react';

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 15;

  return (
    <div>
      {/* Blog posts */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        siblingCount={2}
      />
    </div>
  );
};
```

### Integrating Search Functionality

```tsx
// In a header or navigation component
import { Search } from '../components/ui';
import { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    // Implement search logic
    console.log('Searching for:', query);
  };

  return (
    <header>
      <Search
        placeholder="Search our services..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onSubmit={handleSearch}
        variant="filled"
      />
    </header>
  );
};
```

## Accessibility Features

All navigation components include the following accessibility features:

1. **Keyboard Navigation**: Full keyboard support for all interactive elements
2. **Screen Reader Support**: Proper ARIA attributes and labels
3. **Focus Management**: Visible focus indicators and logical tab order
4. **Semantic HTML**: Proper use of HTML elements for meaning and structure
5. **Contrast Ratios**: Meet WCAG AA contrast requirements
6. **Responsive Design**: Work well on all device sizes

### Breadcrumb Accessibility

- Uses `<nav>` element with `aria-label="Breadcrumb"`
- Implements `aria-current="page"` for current page
- Proper link labeling for screen readers

### Pagination Accessibility

- Keyboard navigable with arrow keys
- Proper ARIA labels for page numbers
- Disabled state for inactive controls
- Visual indication of current page

### BackToTop Accessibility

- Proper `aria-label` for screen readers
- Visible focus state when tabbed to
- Smooth scrolling for reduced motion preference

### Search Accessibility

- Proper labeling with `aria-label`
- Form submission handling
- Clear button with descriptive label
- Keyboard support for submission

## Best Practices

### For Breadcrumbs

1. Use breadcrumbs for hierarchical navigation only
2. Keep breadcrumb text concise
3. Ensure the last item is the current page
4. Don't use breadcrumbs as primary navigation

### For Pagination

1. Show context around the current page
2. Provide first/last page shortcuts for large datasets
3. Maintain consistent page size
4. Preserve scroll position when changing pages

### For BackToTop

1. Set appropriate threshold based on content length
2. Position consistently across pages
3. Ensure it doesn't overlap important content
4. Make it easily discoverable but not intrusive

### For Search

1. Provide clear placeholder text
2. Implement debouncing for live search
3. Show search results in a meaningful way
4. Preserve search state during navigation

## Conclusion

These navigation components enhance the user experience by providing clear pathways through your application. They are designed to be both functional and aesthetically pleasing while maintaining the highest standards of accessibility and performance.

For implementation details of other components, refer to their respective documentation files in this directory.
