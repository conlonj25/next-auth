'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

type BackButtonProps = {
	href: string;
	label: string;
};

export const BackButton = ({ href, label }: BackButtonProps) => {
	return (
		<Button variant="link" size="sm" asChild className="font-normal w-full">
			<Link href={href}>{label}</Link>
		</Button>
	);
};
