"use client";

import React, { useEffect } from "react";
import { Layout, Space } from "antd";
import L7Map from "@/components/l7Map/L7Map";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: "calc(100vh - 64px)",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
};

const Page = () => {
  useEffect(() => {});
  return (
    <Layout>
      <Header style={headerStyle}>叶绿素地图</Header>
      <div style={contentStyle}>
        <L7Map></L7Map>
      </div>
    </Layout>
  );
};

export default Page;
