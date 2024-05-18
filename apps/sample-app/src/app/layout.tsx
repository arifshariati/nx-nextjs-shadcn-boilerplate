import './global.css';
import { Metadata } from 'next';
import { siteConfig } from '../config/site';
import { fontRoboto } from '../config/fonts';
import { cn } from '@nx-nextjs-shadcn-boilerplate/ui/utils';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creater,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-roboto antialiased',
            fontRoboto.variable
          )}
        >
          <main className="grid h-screen place-items-center">{children}</main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
