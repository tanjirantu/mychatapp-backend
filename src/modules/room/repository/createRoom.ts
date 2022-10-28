import { Request, ResponseToolkit } from "@hapi/hapi";
import { RoomCreateInput } from "../types";
import { sendResponse, sendErrorResponse } from "../../../helper";
import generateRoomUid from "./generateRoomUid";
import RoomModel from "../model";
import UserModel from "../../user/model";

export default async (request: Request, h: ResponseToolkit) => {
	try {
		const authUser: any = request.auth.credentials;
		const payload: RoomCreateInput = request.payload as RoomCreateInput;
		const uid: string = await generateRoomUid();
		payload.uid = uid;

		payload.users.push(authUser.userUid);
		const users = await UserModel.find({ uid: { $in: payload.users } });

		const roomCreateInput = {
			...payload,
			users,
		};

		const room = await RoomModel.create(roomCreateInput);

		return h.response(sendResponse(room, 200, "SUCCESS")).code(200);
	} catch (exp: any) {
		return h
			.response({
				statusCode: 500,
				message: "ERROR",
				error: exp.toString(),
			})
			.code(500);
	}
};
