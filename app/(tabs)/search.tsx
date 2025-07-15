import seed from "@/lib/seed";
import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

export default function Search() {
  return (
    <SafeAreaView>
      <Text>Search</Text>
      <Button
        title="seed"
        onPress={() =>
          seed().catch((error) =>
            console.log("Faild to seed the database:", error)
          )
        }
      />
    </SafeAreaView>
  );
}
