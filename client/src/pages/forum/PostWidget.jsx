import React, { useState } from 'react';

function PostWidget({ onPostSubmit }) {
    const [newPost, setNewPost] = useState('');

    const handlePostSubmit = () => {
        onPostSubmit(newPost);
        setNewPost('');
    };

    return (
        <div className="p-4 border border-gray-200 rounded shadow-lg">
            <textarea 
                className="w-full p-2 border border-gray-200 rounded resize-none" 
                rows="4" 
                value={newPost} 
                onChange={e => setNewPost(e.target.value)} 
            />
            <button 
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" 
                onClick={handlePostSubmit}
            >
                Post
            </button>
        </div>
    );
}

export default PostWidget;