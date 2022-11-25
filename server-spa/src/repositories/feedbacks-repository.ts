export interface FeedbackCreateData {
    type: string
    comment: string
    screenshot?: string
    email?: string
}
export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>
}