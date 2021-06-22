import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

        class CampsiteInfo extends Component {

            


           renderCampsite(campsite) {
                return (
                    <div className="col-md-5 m-1">
                      <Card>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>

                        
                    </Card>
                    </div>
                );
           } 

           renderComments(comments) {
                if (comments) {
                    return (
                        <div className="col-md-5 m-1">
                            <h4>Comments</h4>
                            {comments.map(comment => 
                                <div key={comment.id} className="mb-3">
                                    <div>
                                        {comment.text}
                                    </div>
                                    <div>
                                        --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                    </div>
                                </div>

                            )}
                        </div>
                    );
                }  
                return <div></div>     
            }

            //This is the final render. 
                render() {
                    if (this.props.campsite) {
                        return( 
                            <div className="container">
                                <div className="row">
                                    {this.renderCampsite(this.props.campsite)}
                                    {this.renderComments(this.props.campsite.comments)}
                                </div>
                            </div>  
                        );
                    } 
                 return <div />;
            }
        }           
    

export default CampsiteInfo;