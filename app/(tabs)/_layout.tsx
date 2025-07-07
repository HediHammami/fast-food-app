import { Redirect, Slot } from "expo-router";
import React from "react";

export default function HomeLayout() {
  const isAuthenticated = false;
  if (!isAuthenticated) return <Redirect href="/sign-in" />;
  return <Slot />;
}
