import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Task } from "../../Components/Task/Task";
import { COLORS } from "../../Infastructure/theme/colors";
import { TASKS } from "../../Services/Tasks";
export const Main = () => {
    const [value, onChangeText] = useState("");

    return (
        <>
            <View>
                <View
                    style={{
                        marginTop: 10,
                        padding: 20,
                        flexDirection: "row",
                    }}
                ></View>
                <View
                    style={{
                        padding: 16,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                fontSize: 30,
                            }}
                        >
                            {"Hello, \nBessim"}
                        </Text>
                        <TouchableOpacity>
                            <AntDesign
                                name="user"
                                size={40}
                                style={{ color: COLORS.white, alignContent: "flex-end" }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            justifyContent: "space-between",
                            marginTop: 10,
                            paddingHorizontal: 16,
                            paddingVertical: 6,
                            flexDirection: "row",
                            backgroundColor: COLORS.tint,
                            marginVertical: 20,
                            alignItems: "center",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="magnify"
                            size={30}
                            style={{ color: COLORS.white }}
                        />
                        <TextInput
                            style={{
                                borderColor: "gray",
                                width: "80%",
                                height: "100%",
                                color: "#E9F7F7",
                            }}
                            onChangeText={(text) => onChangeText(text)}
                            textAlign="center"
                            cool
                            value={value}
                            placeholder="Search for your tasks!!"
                        />
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    name="microphone"
                                    size={30}
                                    style={{ color: COLORS.white }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    name="tune"
                                    size={30}
                                    style={{ color: COLORS.white }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    padding: 20,
                    flexDirection: "row",
                    backgroundColor: COLORS.background,
                    justifyContent: "space-between",
                    borderTopLeftRadius: 40,
                }}
            >
                <Text style={{ fontSize: 24 }}>Tasks</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="plus"
                        size={40}
                        style={{ color: COLORS.themeColor }}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ backgroundColor: COLORS.background }}>
                {TASKS.map((task) => (
                    <Task
                        key={task.task}
                        task={task.task}
                        icon={task.icon}
                        theme={task.theme}
                        stamp={task.stamp}
                    />
                ))}
            </ScrollView>
        </>
    )
}



