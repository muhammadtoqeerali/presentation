// api/comments.js
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const commentsFile = join(process.cwd(), 'comments.json');
    
    try {
        if (req.method === 'GET') {
            // Read comments
            if (existsSync(commentsFile)) {
                const data = readFileSync(commentsFile, 'utf8');
                const comments = JSON.parse(data);
                return res.status(200).json(comments);
            } else {
                return res.status(200).json({ comments: {}, lastUpdated: new Date().toISOString() });
            }
        }
        
        if (req.method === 'POST') {
            // Save comments
            const { comments } = req.body;
            const data = {
                comments: comments,
                lastUpdated: new Date().toISOString()
            };
            
            writeFileSync(commentsFile, JSON.stringify(data, null, 2));
            return res.status(200).json({ success: true, message: 'Comments saved successfully' });
        }
        
        return res.status(405).json({ error: 'Method not allowed' });
        
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
