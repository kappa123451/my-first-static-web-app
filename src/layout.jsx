


export default function RootLayout() {
    return (
      <html
        lang="en"
        className={cx(
          'text-black bg-white dark:text-white dark:bg-black',
        )}
      >
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          </main>
        </body>
      </html>
    )
  }