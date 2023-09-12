import React from 'react';

import { Search } from '@/components/search';

interface SearchLayoutProps {
    children: React.ReactNode;
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
    return (
        <div>
            <Search />
            {children}
        </div>
    );
};

export default SearchLayout;
