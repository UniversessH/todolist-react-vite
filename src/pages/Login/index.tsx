import React from "react";
import { Layout, Form, Button } from "@douyinfe/semi-ui";
import styles from "./index.module.css";


const Login: React.FC = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout className={styles.loginPageLayout}>
      <Header className={styles.header}>
        <p>登录</p>
        <p>以开始管理你的日常事项</p>
      </Header>
      <Content className={styles.content}>
        <Form className={styles.form}>
          <Form.Input
            field="username"
            label="用户名"
            className={styles.input}
          ></Form.Input>
          <Form.Input
            field="password"
            label="密码"
            className={styles.input}
            mode="password"
          ></Form.Input>
          <Button theme="light" type="secondary" className={styles.loginButton}>
            登录
          </Button>
          <p className={styles.linkToReg}>还没有注册?</p>
        </Form>
      </Content>
    </Layout>
  );
};

export default Login;
