'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Search({ className, ...props }: SearchProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [q, setQ] = useState<string>('');
    const [query] = useDebounce(q, 1000);

    const pathname = usePathname();
    const router = useRouter();
    useEffect(() => {
        setIsLoading(true);
        router.push(pathname + `?q=${query}`);
        setIsLoading(false);
    }, [query]);

    return (
        <div className={cn('')} {...props}>
            <Label className="sr-only" htmlFor="search">
                Search
            </Label>
            <Input
                id="search"
                type="search"
                placeholder="Search for torrents"
                disabled={isLoading}
                value={q}
                onChange={(e) => {
                    setQ(e.target.value);
                    // handleSearch(e.target.value);
                }}
                className="m-auto w-[35%] top-3 left-[calc(100vw-68%)] bg-background"
            />
        </div>
    );
}
