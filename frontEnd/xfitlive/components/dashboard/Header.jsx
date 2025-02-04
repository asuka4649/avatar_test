import React from 'react';
import { View, Text } from "react-native";
import ProfileIcon from './ProfileIcon';

const Header = () => {
    return (
        <View className="h-32 flex-row items-center justify-between self-stretch bg-background px-5 pb-[18px] pt-12">
            <View className="flex-col items-start">
                <Text className="text-white font-black text-[15px]">Good Morning,</Text>
                <Text className="text-white font-semibold text-[20px]">{'{name}'}</Text>
            </View>
            <ProfileIcon />
        </View>
    );
};

export default Header;