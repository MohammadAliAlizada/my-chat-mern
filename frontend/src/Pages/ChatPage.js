import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/MyChats";
import MyChats from "../components/Chatbox";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
    const [fetchAgain, setFetchAgain] = useState(false);
    const suser = JSON.parse(localStorage.getItem("userInfo"));
    const { user } = ChatState();
    

    return (
        <div style={{ width: "100%" }}>
            {user && <SideDrawer />}
            <Box style={{ display: "flex" }} d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {user && <Chatbox fetchAgain={fetchAgain} />}
                {user && (
                    <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
                )}
            </Box>
        </div>
    );
};

export default Chatpage;
