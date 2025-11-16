import { Request, Response } from "express";
import { adminServices } from "./admin.service";

const getAllAdminFromDB = async (req: Request, res: Response) => {
  try {
    const query = req.query;

    const result = await adminServices.getAllAdminFromDB(query);

    res.status(200).json({
      success: true,
      message: "Admin retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

export const adminController = {
  getAllAdminFromDB,
};
