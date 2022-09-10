import React, { useState, useEffect } from "react";
import {
  Card,
  Checkbox,
  Modal,
  Form,
  TextArea,
  DatePicker,
  Row,
} from "@douyinfe/semi-ui";
import styles from "./index.module.css";

interface ITodo {
  id: number;
  content: string;
  deadline: number;
}

const Todo: React.FC = () => {
  const [undoTodos, setUndoTodos] = useState<ITodo[]>([]);
  const [doneTodos, setdoneTodos] = useState<ITodo[]>([]);
  const [datedTodos, setDatedTodos] = useState<ITodo[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setUndoTodos([
      {
        id: 123,
        content: "123",
        deadline: 11,
      },
      {
        id: 1234,
        content: "12341",
        deadline: 111,
      },
    ]);
  }, []);

  const undoTodoClickHandler: any = (index: number) => {
    const doneTodo = undoTodos[index];
    setdoneTodos([...doneTodos, doneTodo]);
    const filteredUndoTodos = undoTodos.filter((item) => {
      return item != undoTodos[index];
    });
    setUndoTodos(filteredUndoTodos);
  };

  return (
    <div className={styles.background}>
      <p className={styles.unfinishedTitle}>未完成的事项</p>
      <div className={styles.todosList}>
        {undoTodos.map((item, index) => {
          return (
            <div key={index} onClick={() => undoTodoClickHandler(index)}>
              <Card shadows="always" className={styles.card}>
                <Checkbox checked={false} className={styles.cardText}>
                  {item.content}
                </Checkbox>
              </Card>
            </div>
          );
        })}
      </div>
      <p className={styles.finishedTitle}>已完成的事项</p>
      <div className={styles.todosList}>
        <Card shadows="always" className={styles.card}>
          <Checkbox defaultChecked disabled className={styles.cardText}>
            上了
          </Checkbox>
        </Card>
      </div>
      <p className={styles.outdatedTitle}>已过期的事项</p>
      <div className={styles.todosList}>
        {doneTodos.map((item, index) => {
          return (
            <div key={index} onClick={() => undoTodoClickHandler(index)}>
              <Card shadows="always" className={styles.card}>
                <Checkbox defaultChecked disabled className={styles.cardText}>
                  {item.content}
                </Checkbox>
              </Card>
            </div>
          );
        })}
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.addButton}>
          <img
            onClick={() => setVisible(true)}
            style={{ width: "30px" }}
            src="/public/img/add.svg"
          />
        </div>
        <Modal
          title="新建一个待办事项"
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          style={{
            width: "80vw",
          }}
        >
          <Form>
            <TextArea />
            <DatePicker insetLabel="截止时间" style={{ marginTop: "20px" }} type="dateTime" />
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Todo;
