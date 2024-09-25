import mongoose from 'mongoose';
const answerSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    exams: { type: mongoose.Schema.Types.ObjectId, required: true },
    answers: [
        {
            question: { type: mongoose.Schema.Types.ObjectId, required: true },
            answer: { type: String, required: true }
        }
    ]
});
const Answer = mongoose.model('Answer', answerSchema);
export default Answer;
