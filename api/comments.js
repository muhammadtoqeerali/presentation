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
            // Read comments with better error handling
            if (existsSync(commentsFile)) {
                try {
                    const data = readFileSync(commentsFile, 'utf8');
                    // Check if file is empty or invalid
                    if (!data || data.trim() === '') {
                        // Return default if empty
                        return res.status(200).json({ comments: {}, lastUpdated: new Date().toISOString() });
                    }
                    const comments = JSON.parse(data);
                    return res.status(200).json(comments);
                } catch (parseError) {
                    // If JSON is corrupted, return default and log error
                    console.error('JSON parse error:', parseError);
                    return res.status(200).json({ comments: {}, lastUpdated: new Date().toISOString() });
                }
            } else {
                // Create default file if it doesn't exist
                const defaultData = { comments: {}, lastUpdated: new Date().toISOString() };
                writeFileSync(commentsFile, JSON.stringify(defaultData, null, 2));
                return res.status(200).json(defaultData);
            }
        }
        
        if (req.method === 'POST') {
            // Save comments
            const { comments } = req.body;
            const data = {
                comments: comments || {},
                lastUpdated: new Date().toISOString()
            };
            
            writeFileSync(commentsFile, JSON.stringify(data, null, 2));
            return res.status(200).json({ success: true, message: 'Comments saved successfully' });
        }
        
        return res.status(405).json({ error: 'Method not allowed' });
        
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}
