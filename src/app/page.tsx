import Link from 'next/link';
import Nyaa from 'nyaa-si';

export default async function Home() {
    const nyaa = new Nyaa();
    const torrents = await nyaa.search();
    // console.log(torrents);

    return (
        <main className='flex flex-col items-center justify-between min-h-screen p-24'>
            {torrents.map(tor => (
                <div key={tor.id} className='container flex gap-1'>
                    <h1>{tor.name}</h1>
                    <Link href={tor.magnet}>{tor.size}</Link>
                </div>
            ))}
        </main>
    );
}
