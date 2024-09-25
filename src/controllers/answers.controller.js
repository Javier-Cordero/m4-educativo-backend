import Answer from '../models/Answers.js'
class AnswersController {
    static async saveAnswer(req, res) {
        const { user, exam, answer } = req.body
        try {
            const newAnswer = await Answer.create({ user, exam, answer })
            res.status(201).json({ message: 'Respuesta guardada correctamente', data: newAnswer })
        } catch (error) { res.status(500).json({ message: 'Error al guardar las respuestas', error }); }
    }
    static async getAnswer(req, res) {
        try {
            const answer = await Answer.find();
            if (!answer) return res.status(404).json({ message: 'Respuesta no encontrada' });
            res.json({ data: answer });
        } catch (error) { res.status(500).json({ message: 'Error al buscar la respuesta', error }); }
    }
    static async getAnswerId(req, res) {
        try {
            const answer = await Answer.findById(req.params.id);
            if (!answer) return res.status(404).json({ message: 'Respuesta no encontrada' });
            res.json({ data: answer });
        } catch (error) { res.status(500).json({ message: 'Error al buscar la respuesta por id', error }); }
    }
}
export default AnswersController;