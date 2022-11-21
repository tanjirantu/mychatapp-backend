import { Request, ResponseToolkit } from "@hapi/hapi";
import UserModel from "../model";
import { User } from "../types";
import {
	sendResponse,
	sendErrorResponse,
	flattenObject,
} from "../../../helper";
import RoomModel from "../../room/model";

export default async (request: Request, h: ResponseToolkit) => {
	try {
		const payload: User = request.payload as User;
		const authUser: any = request.auth.credentials;
		let uid: string = authUser.userUid;

		if (payload && payload.logo) {
			const rooms = await RoomModel.updateMany({
				'users.uid': authUser.userUid
			},
			{
				$set: {
					"users.$[elem].logo": payload.logo
				}
			},{
				arrayFilters: [{"elem.uid": {$eq: authUser.userUid}}]
			})
			console.log({rooms})
		};

		const updatedPayload = flattenObject(payload);
		const user = await UserModel.findOneAndUpdate(
			{ uid, isDeleted: false },
			{
				$set: updatedPayload,
			},
			{ new: true }
		);

		if (!user) {
			return h.response(sendErrorResponse("DATA_NOT_FOUND")).code(200);
		}

		return h.response(sendResponse(user, 204, "UPDATED")).code(200);
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
