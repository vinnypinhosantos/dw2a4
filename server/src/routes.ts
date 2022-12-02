import { prisma } from "./prisma";
import express from "express";
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
    await prisma.feedback.create({
        data: {
            type: req.body.type,
            comment: req.body.comment,
            screenshot: req.body.screenshot,
        }
    })
    return res.status(201).send();
})