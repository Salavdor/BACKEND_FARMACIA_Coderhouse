import { connect } from "mongoose";
import { logger } from "../../logs/winstonlog.js";
import 'dotenv/config';

export const initMongoDB = async() => {
  try {
    await connect(
      mongodb+srv://Admin:5kSTLCIRxPS3kZzS@coderhouse.9tlb0vq.mongodb.net/farmacia
    );
    logger.info(`💾 Conectado a la base de datos MongoDB`);
  } catch (error) {
    logger.error(`💾 Error al conectar a la base de datos MongoDB`);
    throw new Error(error.message);
  }
}
