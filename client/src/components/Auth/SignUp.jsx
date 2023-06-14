import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import styles from "./SignUp.module.css";

import { signup as createUser } from "../../util/login";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values) => {
    setIsSubmitting(true);

    try {
      await createUser(values);
    } catch (error) {
      setIsSubmitting(false);
      const errorMessage =
        error.response?.data?.message || "An error occurred! Please try again.";
      showAlert("error", errorMessage);
      console.log("error", error);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <Card className={styles.card}>
        <h1>Sign Up</h1>
        <Form
          name="normal_signup"
          className={styles.form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="name"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                pattern: /^[A-Za-z0-9]+$/,
                message:
                  "Username must only contain letters and numbers! No spaces allowed.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 8,
                message: "Password must be at least 8 characters!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="passwordConfirm"
            dependencies={["password"]}
            hasFeedback
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={isSubmitting}
              type="primary"
              htmlType="submit"
              className={styles.button}
            >
              Sign Up
            </Button>
          </Form.Item>
          <Link style={{ textAlign: "center" }} to={"/login"}>
            Already have an account? Log in here
          </Link>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
