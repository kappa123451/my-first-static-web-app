import React from 'react';


export default function RootLayout({ children }) {
  return (
    <div
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
      )}
    >
      <div className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </div>
    </div>
  );
}
