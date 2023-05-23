import { useRouter } from 'next/router';

import Link from 'next/link';
import { CSSProperties } from 'react';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}


interface Props {
    text: string;
    href: string;
}

export const ActiveLink = ({ text, href }:Props) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : null }>{ text }</a>
        </Link>
        );
};



