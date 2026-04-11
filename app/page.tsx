15:20:48.471Z	[SERVER]	Installing dependencies...
15:20:48.845Z	[SERVER]	Installing dependencies with pnpm@10.33.0...
15:20:49.208Z	[SERVER]	Lockfile is up to date, resolution step is skipped
15:20:49.234Z	[SERVER]	Progress: resolved 1, reused 0, downloaded 0, added 0
15:20:49.258Z	[SERVER]	Packages: +187
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
15:20:50.235Z	[SERVER]	Progress: resolved 187, reused 187, downloaded 0, added 37
15:20:51.236Z	[SERVER]	Progress: resolved 187, reused 187, downloaded 0, added 116
15:20:51.664Z	[SERVER]	Progress: resolved 187, reused 187, downloaded 0, added 187, done
15:20:51.890Z	[SERVER]	dependencies:
+ @hookform/resolvers 3.10.0
+ @radix-ui/react-accordion 1.2.12
+ @radix-ui/react-alert-dialog 1.1.15
+ @radix-ui/react-aspect-ratio 1.1.8
+ @radix-ui/react-avatar 1.1.11
+ @radix-ui/react-checkbox 1.3.3
+ @radix-ui/react-collapsible 1.1.12
+ @radix-ui/react-context-menu 2.2.16
+ @radix-ui/react-dialog 1.1.15
+ @radix-ui/react-dropdown-menu 2.1.16
+ @radix-ui/react-hover-card 1.1.15
+ @radix-ui/react-label 2.1.8
+ @radix-ui/react-menubar 1.1.16
+ @radix-ui/react-navigation-menu 1.2.14
+ @radix-ui/react-popover 1.1.15
+ @radix-ui/react-progress 1.1.8
+ @radix-ui/react-radio-group 1.3.8
+ @radix-ui/react-scroll-area 1.2.10
+ @radix-ui/react-select 2.2.6
+ @radix-ui/react-separator 1.1.8
+ @radix-ui/react-slider 1.3.6
+ @radix-ui/react-slot 1.2.4
+ @radix-ui/react-switch 1.2.6
+ @radix-ui/react-tabs 1.1.13
+ @radix-ui/react-toast 1.2.15
+ @radix-ui/react-toggle 1.1.10
+ @radix-ui/react-toggle-group 1.1.11
+ @radix-ui/react-tooltip 1.2.8
+ @vercel/analytics 1.6.1
+ autoprefixer 10.4.24
+ class-variance-authority 0.7.1
+ clsx 2.1.1
+ cmdk 1.1.1
+ date-fns 4.1.0
+ embla-carousel-react 8.6.0
+ input-otp 1.4.2
+ lucide-react 0.564.0
+ next 16.2.0
+ next-themes 0.4.6
+ react 19.2.4
+ react-day-picker 9.13.2
+ react-dom 19.2.4
+ react-hook-form 7.71.1
+ react-resizable-panels 2.1.9
+ recharts 2.15.0
+ sonner 1.7.4
+ tailwind-merge 3.4.0
+ vaul 1.1.2
+ zod 3.25.76

devDependencies:
+ @tailwindcss/postcss 4.2.0
+ @types/node 22.19.11
+ @types/react 19.2.14
+ @types/react-dom 19.2.3
+ postcss 8.5.6
+ tailwindcss 4.2.0
+ tw-animate-css 1.3.3
+ typescript 5.7.3
15:20:51.907Z	[SERVER]	╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: sharp@0.34.5.                                       │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
15:20:51.911Z	[SERVER]	Done in 3s using pnpm v10.33.0
15:20:53.504Z	[SERVER]	> my-project@0.1.0 dev /vercel/share/v0-project
> next dev
15:20:54.501Z	[SERVER]	▲ Next.js 16.2.0 (Turbopack)
15:20:54.502Z	[SERVER]	- Local:         http://localhost:3000
15:20:54.503Z	[SERVER]	- Network:       http://192.168.4.161:3000
15:20:54.503Z	[SERVER]	- Environments: .env.development.local
15:20:54.503Z	[SERVER]	✓ Ready in 796ms
15:20:54.579Z	[SERVER]	Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry
15:20:55.176Z	[SERVER]	We detected TypeScript in your project and reconfigured your tsconfig.json file for you.
15:20:55.177Z	[SERVER]	The following suggested values were added to your tsconfig.json. These values can be changed to fit your project's needs:
15:20:55.177Z	[SERVER]	- include was updated to add '.next/dev/types/**/*.ts'
15:20:55.284Z	[SERVER]	- Experiments (use with caution):
15:20:55.284Z	[SERVER]	· serverActions
15:20:55.285Z	[SERVER]	✓ transitionIndicator
15:20:55.285Z	[SERVER]	⨯ turbopackFileSystemCacheForDev
15:21:02.004Z	[SERVER]	○ Compiling / ...
15:21:02.721Z	[SERVER]	GET / 200 in 3.7s (next.js: 3.5s, application-code: 271ms)
15:21:13.147Z	Uncaught Error: Hydration failed because the server rendered text didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <HTTPAccessFallbackErrorBoundary pathname="/" notFound={{...}} forbidden={undefined} unauthorized={undefined} ...>
      <RedirectBoundary>
        <RedirectErrorBoundary router={{...}}>
          <InnerLayoutRouter url="/" tree={[...]} params={{}} cacheNode={{rsc:{...}, ...}} segmentPath={[...]} ...>
            <SegmentViewNode type="page" pagePath="page.tsx">
              <SegmentTrieNode>
              <ClientPageRoot Component={function LogisticsPage} serverProvidedParams={{...}}>
                <LogisticsPage params={Promise} searchParams={Promise}>
                  <main className="min-h-scre...">
                    <Header>
                    <HeroSection>
                      <section id="hero" className="relative m...">
                        <div>
                        <div>
                        <div className="relative z...">
                          <div className="max-w-4xl">
                            <div>
                            <h1 className="text-4xl m...">
                              <span>
                              <span className="block text-[#4ECDC4]">
+                               Nhanh chóng • Đáng tin cậy • Toàn cầu
-                               Nhanh chóng �� Đáng tin cậy • Toàn cầu
                            ...
                        ...
                    ...
            ...
          ...

    at <unknown> (https://react.dev/link/hydration-mismatch)
    at span (<anonymous>)
    at HeroSection (components/logistics/hero-section.tsx:51:13)
    at LogisticsPage (app/page.tsx:14:7)
  49 |             Giải pháp Logistics
  50 |             <span className="block text-[#FF6B35]">Thông minh</span>
> 51 |             <span className="block text-[#4ECDC4]">Nhanh chóng • Đáng tin cậy • Toàn cầu</...
     |             ^
  52 |           </h1>
  53 |
  54 |           {/* Subtitle */}
