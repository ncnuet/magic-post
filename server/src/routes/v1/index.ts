import { Router } from 'express';
import StatusRouter from "./status.route";
import AuthRouter from "./auth.route";
import OfficeRouter from "./office.route";
import ParcelRouter from "./parcel.route";

const router = Router();

router.use("/", StatusRouter)
router.use("/auth", AuthRouter)
router.use("/office", OfficeRouter)
router.use("/parcel", ParcelRouter)

export default router;