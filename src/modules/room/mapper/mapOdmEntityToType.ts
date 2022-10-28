import { RoomWithUserDetails } from "../types";

const mapOdmEntityToType = (room: RoomWithUserDetails) => {
	return {
		uid: room.uid,
		label: room?.label,
		users: room.users.map((user) => ({
			uid: user.uid,
			firsName: user?.firstName,
			lastName: user?.lastName,
			logo: user?.logo,
			contact: {
				phone: user.contact.phone,
				dialCode: user.contact.dialCode,
				phoneWithDialCode: user.contact.phoneWithDialCode,
			},
		})),
		lastSeenAt: room?.lastSeenAt,
		lastMessage: room?.lastMessage,
		newMessageCount: room?.newMessageCount || 0,
	};
};

export default mapOdmEntityToType;
