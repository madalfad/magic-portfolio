import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";

import classNames from "classnames";

import { Footer, Header, RouteGuard, Providers } from "@/components";
import { baseURL, effects, home } from "@/resources";

import { Background, Column, Flex, Mask, MatrixFx } from "@/once-ui/components";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { Meta } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const root = document.documentElement;
                  if (theme === 'system') {
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  } else {
                    root.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <Column
            style={{ minHeight: "100vh" }}
            fillWidth
            margin="0"
            padding="0"
          >
            <Background
              position="fixed"
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
            <Mask
              position="fixed"
              zIndex={0}
              fill
              x={50}
              y={50}
              radius={100}
              style={{ pointerEvents: "none" }}
            >
              <MatrixFx
                flicker
                fps={30}
                data-solid="color"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 50%, transparent 100%)",
                }}
                colors={["brand-solid-strong", "accent-solid-strong"]}
                size={2}
                spacing={4}
                bulge={{
                  duration: 2,
                  intensity: 10,
                  repeat: false,
                }}
              />
            </Mask>
            <Flex fillWidth minHeight="16" s={{ hide: true }}></Flex>
            <Header />
            <Flex
              zIndex={0}
              fillWidth
              paddingY="l"
              paddingX="l"
              horizontal="center"
              flex={1}
            >
              <Flex horizontal="center" fillWidth minHeight="0">
                <RouteGuard>{children}</RouteGuard>
              </Flex>
            </Flex>
            <Footer />
          </Column>
        </Providers>
      </body>
    </html>
  );
}
