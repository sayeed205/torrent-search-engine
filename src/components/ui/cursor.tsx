'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const AnimatedCursor = dynamic(
    () => import('react-animated-cursor-ts').then((mod) => mod.AnimatedCursor),
    {
        ssr: false,
    }
);

export default function Cursor() {
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [desktop, setDesktopMode] = useState(false);

    useEffect(() => {
        const updateComp = () => {
            setDesktopMode(desktop);
        };

        updateComp();
        window.addEventListener('resize', updateComp);
        return () => {
            window.removeEventListener('resize', updateComp);
        };
    }, [desktop]);

    useEffect(() => {
        console.log(
            '%cMade with ❤︎️ by Sayed Ahmed',
            'background:#14161a;color:#fff;padding:0.5em 1em;line-height:1.8;'
        );
    }, []);

    return (
        <AnimatedCursor
            innerSize={12}
            outerSize={60}
            outerAlpha={0.1}
            color={
                currentTheme === 'dark'
                    ? '255,255,255'
                    : currentTheme === 'light'
                    ? '0,0,0'
                    : '13,115,231'
            }
            innerScale={2.5}
            outerScale={0.8}
            trailingSpeed={18}
            clickables={['a', 'button', '.heading']}
        />
    );
}
