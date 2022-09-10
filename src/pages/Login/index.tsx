import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Layout, Form, Button } from "@douyinfe/semi-ui";
import styles from "./index.module.css";
import "./tran-style.css";

const Login: React.FC = () => {
  const [formState, setFormState] = useState(1);
  const { Header, Content } = Layout;
  let navigate = useNavigate();

  const linkClickHandler = () => {
    if (formState === 1) {
      setFormState(2);
    } else {
      setFormState(1);
    }
  };

  const syncValidate = (values: any) => {
    const errors: any = {};
    if (values.confirmPassword) {
      if (values.password != values.confirmPassword) {
        errors.password = "两次输入的密码不一致";
        errors.confirmPassword = "两次输入的密码不一致";
      }
    }
    return errors;
  };

  return (
    <Layout className={styles.loginPageLayout}>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          unmountOnExit={true}
          timeout={300}
          classNames={"fade"}
          key={formState}
        >
          {formState === 1 ? (
            <Header className={styles.header}>
              <p>登录</p>
              <p>以开始管理你的日常事项</p>
            </Header>
          ) : (
            <Header className={styles.header}>
              <p>注册</p>
              <p>以获取你的管理账号</p>
            </Header>
          )}
        </CSSTransition>
      </SwitchTransition>

      <Content className={styles.content}>
        <Form validateFields={syncValidate} className={styles.form}>
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
          {formState === 1 ? (
            <>
              <Button
                theme="light"
                type="secondary"
                htmlType="submit"
                className={styles.loginButton}
                onClick={() => navigate("/todo")}
              >
                登录
              </Button>
              <p
                onClick={() => linkClickHandler()}
                className={styles.linkToReg}
              >
                还没有注册?
              </p>
            </>
          ) : (
            <>
              <Form.Input
                field="confirmPassword"
                label="确认密码"
                className={styles.input}
                mode="password"
              ></Form.Input>
              <Button
                theme="light"
                type="secondary"
                htmlType="submit"
                className={styles.loginButton}
              >
                注册
              </Button>
              <p
                onClick={() => linkClickHandler()}
                className={styles.linkToReg}
              >
                已有账号? 点击登录
              </p>
            </>
          )}
        </Form>
      </Content>
    </Layout>
  );
};

export default Login;
