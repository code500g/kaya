"use client";

import {
  ApiOutlined,
  CodeOutlined,
  RocketOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Button, Card, Flex, Space, Tag, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const features = [
  {
    title: "Ready to ship",
    description:
      "Next.js 16 App Router with Tailwind CSS v4 and Ant Design 5 prewired.",
    icon: <RocketOutlined className="text-xl text-cyan-300" />,
  },
  {
    title: "JavaScript-first",
    description: "Ship quickly with JSX pages, Tailwind utilities, and ESLint defaults.",
    icon: <CodeOutlined className="text-xl text-cyan-300" />,
  },
  {
    title: "UI toolkit",
    description: "Ant Design components pair nicely with utility-first styling.",
    icon: <ToolOutlined className="text-xl text-cyan-300" />,
  },
  {
    title: "API ready",
    description: "App Router server actions and route handlers are available.",
    icon: <ApiOutlined className="text-xl text-cyan-300" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-16">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <Space size="middle" direction="vertical" className="w-full">
            <Tag color="cyan-inverse" className="self-start">
              Next.js + Tailwind CSS + Ant Design
            </Tag>
            <Title level={1} className="!m-0 !text-white">
              Kaya starter is ready to build
            </Title>
            <Paragraph className="!mb-4 !text-slate-200">
              Scaffolded with the App Router, Tailwind CSS v4, and Ant Design 5.
              Swap content and start shipping pages without wiring up the UI
              stack yourself.
            </Paragraph>
            <Space size="middle" wrap>
              <Button
                type="primary"
                size="large"
                icon={<RocketOutlined />}
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
              >
                Next.js docs
              </Button>
              <Button
                size="large"
                ghost
                icon={<ApiOutlined />}
                href="https://ant.design/docs/react/introduce"
                target="_blank"
                rel="noreferrer"
              >
                Ant Design guide
              </Button>
              <Button
                size="large"
                icon={<ToolOutlined />}
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </Button>
            </Space>
          </Space>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-white/10 bg-slate-900/60 text-white shadow-lg"
              styles={{
                body: { padding: 24 },
              }}
            >
              <Space size="middle" direction="vertical" className="w-full">
                <Flex gap={12} align="center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                    {feature.icon}
                  </span>
                  <Title level={4} className="!m-0 !text-white">
                    {feature.title}
                  </Title>
                </Flex>
                <Paragraph className="!mb-2 !text-slate-200">
                  {feature.description}
                </Paragraph>
                <Text code className="!text-cyan-200">
                  npm run dev
                </Text>
              </Space>
            </Card>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-inner">
          <Title level={3} className="!mb-3 !text-white">
            Quick start
          </Title>
          <Flex gap={16} vertical>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-semibold text-cyan-200">
                1
              </span>
              <Paragraph className="!m-0 !text-slate-200">
                Run <Text code>npm run dev</Text> and open{" "}
                <Text code>http://localhost:3000</Text>.
              </Paragraph>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-semibold text-cyan-200">
                2
              </span>
              <Paragraph className="!m-0 !text-slate-200">
                Edit <Text code>src/app/page.jsx</Text> and use Ant Design
                components with Tailwind utility classes.
              </Paragraph>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-semibold text-cyan-200">
                3
              </span>
              <Paragraph className="!m-0 !text-slate-200">
                Deploy to Vercel or your preferred host when you are ready.
              </Paragraph>
            </div>
          </Flex>
        </section>
      </main>
    </div>
  );
}
