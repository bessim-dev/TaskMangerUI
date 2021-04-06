import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../Infastructure/theme/colors";

export const Task = ({ task, icon, theme, stamp }) => (
    <View
        key={task}
        style={styles.taskContainer}
    >
        <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name={icon} size={40} style={{ color: theme }} />

            <View>
                <Text style={{ fontSize: 16 }}>{task}</Text>
                <Text style={{ color: COLORS.greyish }}>{stamp}</Text>
            </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
                <MaterialCommunityIcons
                    name="pencil"
                    size={40}
                    style={{ color: theme, marginLeft: 5 }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={40}
                    style={{ color: theme }}
                />
            </TouchableOpacity>
        </View>
    </View>
);
const styles = StyleSheet.create({
    taskContainer: {

        backgroundColor: COLORS.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingHorizontal: 24,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "space-between",

    },
});