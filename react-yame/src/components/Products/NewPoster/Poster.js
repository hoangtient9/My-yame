import React from 'react';

import classes from './Poster.module.scss';

const Poster = props => {
    const listPoster = [
        {
            anh: 'https://cms.yame.vn/uploads/a6fc35de-af55-4be4-b478-7a921c9ef449-Thum blog MB HR.jpg',
            listAnh: [
                'https://cdn2.yame.vn/pimg/giay-da-cot-day-y2010-am09-0019628/8bbf2248-d1c1-1500-cab9-0017010456e7.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn3.yame.vn/pimg/ao-khoac-y2010-jean-b03-0019382/4b3d8aff-f97b-1600-29af-001700ea9309.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-co-tru-h01-0019496/4df2988a-a189-0100-1633-001700f5e411.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/pktt-khau-trang-y2010-a01-0019615/7e659005-2d57-0200-d862-001700e6d778.jpg?w=540&h=756&c=true&ntf=false'
            ]
        },
        {
            anh: 'https://cms.yame.vn/uploads/a6fc35de-af55-4be4-b478-7a921c9ef449-Thum blog MB HR.jpg',
            listAnh: [
                'https://cdn2.yame.vn/pimg/giay-da-cot-day-y2010-am09-0019628/8bbf2248-d1c1-1500-cab9-0017010456e7.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn3.yame.vn/pimg/ao-khoac-y2010-jean-b03-0019382/4b3d8aff-f97b-1600-29af-001700ea9309.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-co-tru-h01-0019496/4df2988a-a189-0100-1633-001700f5e411.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/pktt-khau-trang-y2010-a01-0019615/7e659005-2d57-0200-d862-001700e6d778.jpg?w=540&h=756&c=true&ntf=false'
            ]
        },
        {
            anh: 'https://cms.yame.vn/uploads/a6fc35de-af55-4be4-b478-7a921c9ef449-Thum blog MB HR.jpg',
            listAnh: [
                'https://cdn2.yame.vn/pimg/giay-da-cot-day-y2010-am09-0019628/8bbf2248-d1c1-1500-cab9-0017010456e7.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn3.yame.vn/pimg/ao-khoac-y2010-jean-b03-0019382/4b3d8aff-f97b-1600-29af-001700ea9309.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-co-tru-h01-0019496/4df2988a-a189-0100-1633-001700f5e411.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/pktt-khau-trang-y2010-a01-0019615/7e659005-2d57-0200-d862-001700e6d778.jpg?w=540&h=756&c=true&ntf=false'
            ]
        },
        {
            anh: 'https://cms.yame.vn/uploads/a6fc35de-af55-4be4-b478-7a921c9ef449-Thum blog MB HR.jpg',
            listAnh: [
                'https://cdn2.yame.vn/pimg/giay-da-cot-day-y2010-am09-0019628/8bbf2248-d1c1-1500-cab9-0017010456e7.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn3.yame.vn/pimg/ao-khoac-y2010-jean-b03-0019382/4b3d8aff-f97b-1600-29af-001700ea9309.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-co-tru-h01-0019496/4df2988a-a189-0100-1633-001700f5e411.jpg?w=540&h=756&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/pktt-khau-trang-y2010-a01-0019615/7e659005-2d57-0200-d862-001700e6d778.jpg?w=540&h=756&c=true&ntf=false'
            ]
        },
    ]
    return (
        <div className={classes.Poster}>
            {listPoster.map((poster, i) => (
                <div key={i} className={classes.PosterItem}>
                    <div>
                        <h4>Mo ban 10 - 07</h4>
                    </div>
                    <div>
                        <img src={poster.anh} alt="den"/>
                    </div>
                    <div className={classes.ListImage}>
                        {poster.listAnh.map((a, ind) => (
                            <div key={ind}>
                                <img src={a} alt='giay'/>
                            </div>
                        ))}
                    </div>
                </div>
            ))} 
        </div>
    )
}

export default Poster;