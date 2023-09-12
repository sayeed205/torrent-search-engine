import Link from 'next/link';
import Nyaa from 'nyaa-si';

import { ScrollArea } from '@/components/ui/scroll-area';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Icons } from '@/components/icons';

type Props = {
    params: {};
    searchParams: {
        q: string;
        p: number;
    };
};

const Search = async (props: Props) => {
    const nyaa = new Nyaa();
    const torrents = await nyaa.search(props.searchParams.q, {
        page: props.searchParams.p,
        // p: props.searchParams.p,
    });

    // console.log(props);
    // console.log(torrents);
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
            <ScrollArea className="h-[calc(100vh-15em)] w-[calc(100vw-1rem)] md:w-[calc(100vw-20rem)] border rounded-md">
                <Table className="">
                    <TableHeader className="sticky">
                        <TableRow>
                            <TableHead className="w-[100px]">Magnet</TableHead>
                            <TableHead className="w-[100px]">Title</TableHead>
                            <TableHead>Size</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Seeders</TableHead>
                            <TableHead>Leechers</TableHead>
                            <TableHead>Downloads</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {torrents.map((tor) => (
                            <TableRow key={tor.id}>
                                <TableCell className="font-medium">
                                    <Link href={tor.magnet} target="_blank">
                                        <Icons.magnet className="w-6 h-6" />
                                    </Link>
                                </TableCell>
                                <TableCell className="font-medium">
                                    <Link
                                        href={`https://nyaa.land/view/${tor.id}`}
                                        target="_blank"
                                    >
                                        {tor.name}
                                    </Link>
                                </TableCell>
                                <TableCell>{tor.size}</TableCell>
                                <TableCell>
                                    {tor.date.toLocaleDateString()}
                                </TableCell>
                                <TableCell>{tor.seeders}</TableCell>
                                <TableCell>{tor.leechers}</TableCell>
                                <TableCell>{tor.downloads}</TableCell>
                                <TableCell className="text-right">
                                    {tor.seeders}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
            <TableCaption>Showing results: {torrents.length}</TableCaption>
        </main>
    );
};

export default Search;
