import { useState } from "react";
import './CommentsForm.css'

export default function CommentsForm(){

    let [formData , setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5 ,

    })

    function handleInputChange(event){
        let fieldName = event.target.name ;
        let newInput = event.target.value;

        setFormData( (currData) =>{
            currData[fieldName] = newInput ;
            return {...currData};
        })
    }

    function onSubmit(event){
        console.log(formData);
        event.preventDefault() ;
        setFormData({
           username : "",
            remarks : "",
            rating : 5 , 
        })
    }

    return (
        // <div className="CommentBox">
        //     <h2>Give a Comment !</h2>
            
        //     <form onSubmit={onSubmit}>
        //         <label htmlFor="username">USERNAME</label>
        //         <input type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={handleInputChange} id="username"/>
                
        //         <label htmlFor="remarks">REMARKS</label>
        //         <br />
        //         <textarea name="remarks" placeholder="Add some remarks" value={formData.remarks} onChange={handleInputChange} id="remarks">Remarks</textarea>
                
        //         <label htmlFor="rating">RATING</label>
        //         <br />
        //         <input type="number" name="rating"  min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating"/>
                
        //         <button>Send Comments</button>
        //     </form>
        // </div>



        <div className="CommentBox">
            <div className="form-content">
                <h2>Share Your Thoughts</h2>
                
                <div className="form-description">
                    Help others by sharing honest and constructive feedback. Your insights matter!
                </div>
                
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">
                            <span className="icon">👤</span>
                            USERNAME
                        </label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter your username" 
                            value={formData.username} 
                            onChange={handleInputChange} 
                            id="username"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="remarks">
                            <span className="icon">💬</span>
                            REMARKS
                        </label>
                        <textarea 
                            name="remarks" 
                            placeholder="Share your thoughts and feedback..." 
                            value={formData.remarks} 
                            onChange={handleInputChange} 
                            id="remarks"
                        />
                        <div className="char-counter">{formData.remarks.length}/500</div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="rating">
                            <span className="icon">⭐</span>
                            RATING
                        </label>
                        <div className="rating-wrapper">
                            <div className="rating-stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className={`star-button ${formData.rating >= star ? 'active' : ''}`}
                                        onClick={() => setFormData({ ...formData, rating: star })}
                                        title={`Rate ${star}`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                            <div className="rating-value">
                                {formData.rating}/5 Stars
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit">Send Comments</button>
                </form>
            </div>

            <div className="visual-section">
                <div className="visual-blob"></div>
                <div className="visual-blob"></div>
                <div className="visual-blob"></div>
                <div className="visual-icon">💭</div>
                
                <div className="stats">
                    <div className="stat-item">
                        <div className="stat-number">2.4K</div>
                        <div className="stat-label">Reviews</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">4.8★</div>
                        <div className="stat-label">Rating</div>
                    </div>
                </div>
            </div>
        </div>
    )
}