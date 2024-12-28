import { useUser } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";

const Home = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const isLoading = false;

  const handleSignOut = () => {
    signOut();
    router.replace("/(auth)/sign-in");
  };

  const recentRides = [
    {
      ride_id: "1",
      user_email: "abcd@gmail.com",
      origin_address: "Kathmandu, Nepal",
      destination_address: "Pokhara, Nepal",
      origin_latitude: 27.717245,
      origin_longitude: 85.323961,
      destination_latitude: 28.209583,
      destination_longitude: 83.985567,
      ride_time: 391,
      fare_price: 19500.0,
      payment_status: "paid",
      driver_id: 2,
      user_id: "1",
      created_at: "2024-08-12 05:19:20.620007",
      driver: {
        driver_id: "2",
        first_name: "David",
        last_name: "Brown",
        profile_image_url:
          "https://ucarecdn.com/6ea6d83d-ef1a-483f-9106-837a3a5b3f67/-/preview/1000x666/",
        car_image_url:
          "https://ucarecdn.com/a3872f80-c094-409c-82f8-c9ff38429327/-/preview/930x932/",
        car_seats: 5,
        rating: "4.60",
      },
    },
    {
      ride_id: "2",
      user_email: "abcd@gmail.com",
      origin_address: "Jalkot, MH",
      destination_address: "Pune, Maharashtra, India",
      origin_latitude: 18.609116,
      origin_longitude: 77.1658,
      destination_latitude: 18.52,
      destination_longitude: 73.8567,
      ride_time: 491,
      fare_price: 2450,
      payment_status: "paid",
      driver_id: 1,
      user_id: "1",
      created_at: "2024-08-12 06:12:17.683046",
      driver: {
        driver_id: "1",
        first_name: "James",
        last_name: "Wilson",
        profile_image_url:
          "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
        car_image_url:
          "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
        car_seats: 4,
        rating: "4.80",
      },
    },
    {
      ride_id: "3",
      user_email: "abcd@gmail.com",
      origin_address: "Zagreb, Croatia",
      destination_address: "Rijeka, Croatia",
      origin_latitude: 45.81501,
      origin_longitude: 15.98191,
      destination_latitude: 45.32706,
      destination_longitude: 14.44217,
      ride_time: 124,
      fare_price: 6200,
      payment_status: "paid",
      driver_id: 1,
      user_id: "1",
      created_at: "2024-08-12 08:49:01.809053",
      driver: {
        driver_id: "1",
        first_name: "James",
        last_name: "Wilson",
        profile_image_url:
          "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
        car_image_url:
          "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
        car_seats: 4,
        rating: "4.80",
      },
    },
    {
      ride_id: "4",
      user_email: "abcd@gmail.com",
      origin_address: "Okayama, Japan",
      destination_address: "Osaka, Japan",
      origin_latitude: 34.655531,
      origin_longitude: 133.919795,
      destination_latitude: 34.693725,
      destination_longitude: 135.502254,
      ride_time: 159,
      fare_price: 7900.0,
      payment_status: "paid",
      driver_id: 3,
      user_id: "1",
      created_at: "2024-08-12 18:43:54.297838",
      driver: {
        driver_id: "3",
        first_name: "Michael",
        last_name: "Johnson",
        profile_image_url:
          "https://ucarecdn.com/0330d85c-232e-4c30-bd04-e5e4d0e3d688/-/preview/826x822/",
        car_image_url:
          "https://ucarecdn.com/289764fb-55b6-4427-b1d1-f655987b4a14/-/preview/930x932/",
        car_seats: 4,
        rating: "4.70",
      },
    },
  ];

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        keyExtractor={(item, index) => index.toString()}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!isLoading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40  "
                  alt="No Recent Rides Found"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="large" color="text-primary-500" />
            )}
          </View>
        )}
        ListHeaderComponent={
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-xl font-JakartaExtraBold">
                Welcome {user?.firstName}👋
              </Text>
              <TouchableOpacity
                onPress={handleSignOut}
                className="justify-center items-center w-10 h-10 rounded-full bg-white"
              >
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
            </View>

            <>
              <Text className="text-xl font-JakartaBold mt-5 mb-3">
                Your current location
              </Text>
            </>

            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              Recent Rides
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
