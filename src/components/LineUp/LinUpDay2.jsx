import React, { useCallback, useState, useEffect, Fragment, useContext, setState } from "react";
import "./LineUp.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "../context";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from "bootstrap";  //necessery 4 modal
import $ from 'jquery';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import LineUpTilte from './../../image/lineUp_morning.png'



class TableDayTwo extends Component {
    state = { showTable: true, isDayTwo: false };

    changeTime = () => {
        this.setState({ showTable: !this.state.showTable });
    }

    changeDay1 = () => {
       
        $('.dayTwo').hide();
        $('.dayOne').show();

    }
    
    render() {
        return (
     
            <div className={` ${this.state.showTable?'normalType':'whyTest'}`}>
                <div >
                    <img className="designLineUp" src={LineUpTilte}/>
                </div>
                <div className="dayTwoTable allTable" >

                    <div className="d-flex justify-content-start daySunBox " >
                        <img src="https://media.discordapp.net/attachments/677538517949218820/942958807909273610/sun.png"
                            // className='sun2'
                            className={`sun ${this.state.showTable?'':'sun-Clicked'}`}></img>
                        <img src="https://media.discordapp.net/attachments/677538517949218820/942958807724732487/Mask_Group_1498.png"
                            // className='moon2'
                            className={`moon ${this.state.showTable?'':'moon-Clicked'}`}>

                        </img>

                    </div>
                    <div className='btnG'>
                        <button type="button" className="btn btn-outline-secondary  campDay1"
                            onClick={this.changeDay1}>
                            DAY 1
                        </button>
                        <button type="button" className="btn  btn-secondary campDay2">
                            DAY 2
                        </button>
                    </div>
                    <div className='dayTable ' >
                        
                        <div className="container lineTableSetting"
                            style={{ display: this.state.showTable ? 'block' : 'none' }}>
                            <table className="table"  >
                                <thead className="thisBar">
                                    <tr className="tHead d-flex flex-wrap myBox">
                                        <th className="col-0 border-0 timeTitle "><b>Time</b></th>
                                        <th className="col-3 border-0" ><div className="stageColor">STAGE 1</div></th>
                                        <th className="col-3 border-0" ><div className="stageColorM">STAGE 2</div></th>
                                        <th className="col-3 border-0" ><div className="stageColor">STAGE 3</div></th>
                                    </tr>
                                </thead>


                                <tbody className="giveMeSpace">
                                    <tr className="d-flex flex-wrap myBox ">
                                        <th className="col-0 inTableTime">13:00 <br></br>13:50</th>
                                        <th className="col-3" >  
                                            <a id='ZZ_TOP12' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".ZZ_TOP12">ZZ TOP
                                            </a>
                                            <div className="modal fade ZZ_TOP12" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title ZZ_TOP" id="" >ZZ TOP</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://s.hdnux.com/photos/01/16/13/03/20492480/3/rawImage.jpg"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;&emsp;ZZ Top是1969年成立於美國德克薩斯州休斯敦的一個搖滾樂隊。<br />&emsp;&emsp;當前的成員有貝斯手兼主唱Dusty Hill、吉他手兼主唱Billy Gibbons（也是樂隊隊長，主要填詞、作曲人）和鼓手Frank Beard。
                                                                            該樂隊陣容已經維持了超過45年。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/5LMGAYhn2ywaxGZdtmXGpw" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"> </th>
                                        <th className="col-3" >  
                                            <a id='Trash2' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".Trash2">Trash
                                            </a>
                                            <div className="modal fade Trash2" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title Trash1" id="" >Trash</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://img.shoplineapp.com/media/image_clips/60e263d22849b600176dbddc/original.jpg?1625449426"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;&emsp;TRASH樂團，為臺灣樂團，於2009年12月成立於臺北，目前成員四位由主唱阿夜、吉他手頤原、貝斯手博文、鼓手金魁剛所組成。

                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/4xI5LoEWLxoTm4DNa4fSUn" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox bgc">
                                        <th className="col-0 inTableTime ">13:50 <br></br>14:40</th>
                                        <th className="col-3" > </th>
                                        <th className="col-3" >  
                                            <a id='OneRepublic1' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".OneRepublic1">OneRepublic
                                            </a>
                                            <div className="modal fade OneRepublic1" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title OneRepublic" id="" >OneRepublic</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://images3.kingautos.net/2017/07/22/87TjOAhBpWzrAFf.jpg"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;&emsp;OneRepublic於2003年在美國科羅拉多州科羅拉多泉成立。2007年由提姆巴蘭混音製作的首張單曲——（Apologize），在《告示牌》排行榜Top 5停留了五周，並晉升至亞軍的位置。
                                                                            <br />
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/20lOt6G8MHv8ZO7ViOmiP7" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"> </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox">
                                        <th className="col-0 inTableTime">14:40 <br></br>15:30</th>
                                        <th className="col-3" >  
                                            <a id='BonJovi1' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".BonJovi1">BonJovi
                                            </a>
                                            <div className="modal fade BonJovi1" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title BonJovi" id="" >BonJovi</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://i.iheart.com/v3/re/new_assets/5a90701b96f64dd64b193742"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;Bon Jovi是一個美國的新澤西賽瑞維爾市的硬搖滾樂團，由主唱Jon Bon Jovi建立，
                                                                            樂團在1980年代獲得了巨大的成功，在過去的二十五年裡，邦喬飛已經在全世界賣出了一億兩千萬張唱片。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/0kBfgEilUFCMIQY5IOjG4t" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"> </th>
                                        <th className="col-3" >  
                                            <a id='MayShow' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".MayShow2">AmazingShow
                                            </a>
                                            <div className="modal fade MayShow2" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title MayShow" id="" >AmazingShow</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='MayShow' src="https://www.mirrormedia.com.tw/assets/images/20210512161304-47eb43889c970bd8e8511beed4a25dfd-tablet.jpg"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;&emsp;美秀集團是嘉義的獨立樂團，曲風特色是帶有復古台味的搖滾和民謠，樂團採用自製樂器進行演出。<br />
                                                                            &emsp;&emsp;目前成員共五人，由主唱兼吉他手狗柏、吉他手修齊、鍵盤手冠佑、鼓手鍾錡及貝斯手婷文組成。

                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/2M55kmmq0xR32RKDtBIeHT" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        {/* Modal Over */}
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox bgc">
                                        <th className="col-0 inTableTime">15:30 <br></br>16:20</th>
                                        <th className="col-3"> </th>
                                        <th className="col-3" >  
                                            <a id='Back-On1' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".Back-On1">Back-On
                                            </a>
                                            <div className="modal fade Back-On1" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title Back-On" id="" >Back-On</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='Back-On' src="https://blow.streetvoice.com/wp-content/uploads/2016/06/pic.jpg"></img>
                                                                        {/* ! ! HERE IS FOR IMG ! !*/}
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;&emsp;BACK-ON 是一組來自東京，融合多種音樂類型的混合搖滾樂團，以主唱 KENJI03 穿透人心的旋律、MC TEEDA 英日文夾雜的 RAP 為主軸，
                                                                            不斷追求嶄新的搖滾樂。他們也曾於亞洲、歐洲、南美等地進行演出，
                                                                            感染力十足的現場演出在世界各地獲得相當高的評價。</div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/3TpgBK0jom391y7SdJF1iO" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"></th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox">
                                        <th className="col-0 inTableTime">16:20 <br></br>17:10</th>
                                        <th className="col-3" >  
                                            <a id='Journey1' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".Journey1">Journey
                                            </a>
                                            <div className="modal fade Journey1" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title Journey" id="" >Journey</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://www.morrisonhotelgallery.com/images/medium/Journey_BarrySchultz19.jpg"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;Journey是1973年由山塔那合唱團和Frumious Bandersnatch的前成員在舊金山成立的美國搖滾樂團。
                                                                            <br />&emsp;樂團經歷了幾次陣容變換；而1978年至1987年，樂團獲得了商業上最大的成功。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/2OyVtIEp7O7a6o82DF4Ba5" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"></th>
                                        <th className="col-3" >  
                                            <a id='WonFu' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".WonFu">Won Fu
                                            </a>
                                            <div className="modal fade WonFu" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title WonFu" id="" >Won Fu</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://www.niusnews.com/upload/posts/po3_58876_1508472576.jpg"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;Won Fu，四人成員的台灣樂團。正式成軍於1998年10月。
                                                                            <br />&emsp;&emsp;參與多次春天吶喊、野台開唱、貢寮海洋音樂祭等大型音樂活動，以其童趣十足、簡單詼諧和獨特的創意獨樹一格。參加滾石半成年合輯後逐漸打開知名度。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/2PjCxy7d085P2vQ3Nt3Vg3" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox bgc">
                                        <th className="col-0 inTableTime">17:10 <br></br>18:00</th>
                                        <th className="col-3"> </th>
                                        <th className="col-3" >  
                                            <a id='VH' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".VH">Vast&Hazy
                                            </a>
                                            <div className="modal fade VH" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title VH" id="" >Vast&Hazy</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://i0.wp.com/partystar.media/wp-content/uploads/2018/05/cc_2429_ii-e1592197703221.jpg?resize=1068%2C712&ssl=1"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;&emsp;樂團界獨特雙人創作組合Vast & Hazy由主唱咖咖與吉他手易祺組成，
                                                                            自學生時期起即在獨立音樂圈耕耘。<br />&emsp;&emsp;2017 年在樂迷的千呼萬喚中回歸，
                                                                            歌曲尚未釋出即創造暖身專場兩場完售的好成績，
                                                                            &lt;與浪之間&gt;更入圍金曲獎最佳音樂錄影帶獎。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/3qsMWfRX0HPfhUBRm9uRJh" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </th>
                                        <th className="col-3"> </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox">
                                        <th className="col-0 inTableTime">18:00 <br></br>18:50</th>
                                        <th className="col-3" >  
                                            <a id='Sum41' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".Sum41_1">Sum 41
                                            </a>
                                            <div className="modal fade Sum41_1" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title Sum41_1" id="" >Sum 41</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSQF-bFnws_uht0mulezKxNs7YgjUsMzyXA&usqp=CAU"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &nbsp; &nbsp;&nbsp; Sum 41 來自加拿大安大略的流行龐克樂團。
                                                                            該樂團成員來自當地高校樂團"1996年夏季的41天"。<br />
                                                                            &nbsp;&nbsp;於2002年發行了他們的首張專輯《All Killer, No Filler》。
                                                                            第一首單曲《Fat Lip》獲得了廣告牌現代搖滾曲目榜的第一名的成績，標誌著Sum41在主流獲得的成就。

                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/2UCWsnmZEVg9HhnMeKTsim" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"> </th>
                                        <th className="col-3" >  
                                            <a id='PapaRoach1' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".PapaRoach1">Papa Roach
                                            </a>
                                            <div className="modal fade PapaRoach1" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title PapaRoach1" id="" >Papa Roach</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-6778-20120821-papa-roach-624x-1345754461.jpg?resize=1800,1200&w=1800"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;&emsp;Papa Roach，美國硬搖滾、另類金屬樂隊，來自加利福尼亞州瓦卡維爾。<br />&nbsp;&nbsp;處女專輯《Infest》於2000年發售，自此打響名堂。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/7A65ASxK8FMdNEFMQvRKG5" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="iAmHere">
                                <button className="hereBtn"
                                    onClick={this.changeTime}><FontAwesomeIcon icon={faCaretDown}  className='fontAwe'/></button>
                            </div>
                        </div>


                    </div>
                    <div className="dayTwoNight nightTable " style={{ display: this.state.showTable == true ? 'none' : 'block' }}>
                        <div className="container lineTableSettingNight" >
                            <table className="table border-0 ">
                                <thead className="">
                                    <tr className="tHead d-flex flex-wrap myBox">
                                        <th className="col-0 border-0 timeTitle" ><b>Time</b> </th>
                                        <th className="col-3 border-0" ><div className="stageColor">STAGE 1</div></th>
                                        <th className="col-3 border-0" ><div className="stageColorM">STAGE 2</div></th>
                                        <th className="col-3 border-0" ><div className="stageColor">STAGE 3</div></th>
                                    </tr>
                                </thead>

                                <tbody className="giveMeSpace">
                                    <tr className="d-flex flex-wrap myBox">
                                        <th className="col-0 inTableTime">18:00 <br></br>18:50</th>

                                        <th className="col-3" >  
                                            <a id='Sum41' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".Sum41">Sum 41
                                            </a>
                                            <div className="modal fade Sum41" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title Sum41" id="" >Sum 41</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSQF-bFnws_uht0mulezKxNs7YgjUsMzyXA&usqp=CAU"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &nbsp; &nbsp;&nbsp; Sum 41 來自加拿大安大略的流行龐克樂團。
                                                                            該樂團成員來自當地高校樂團"1996年夏季的41天"。<br />
                                                                            &nbsp;&nbsp;於2002年發行了他們的首張專輯《All Killer, No Filler》。
                                                                            第一首單曲《Fat Lip》獲得了廣告牌現代搖滾曲目榜的第一名的成績，標誌著Sum41在主流獲得的成就。

                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/2UCWsnmZEVg9HhnMeKTsim" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"> </th>
                                        <th className="col-3" >  
                                            <a id='PapaRoach' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".PapaRoach">Papa Roach
                                            </a>
                                            <div className="modal fade PapaRoach" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title PapaRoach" id="" >Papa Roach</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-6778-20120821-papa-roach-624x-1345754461.jpg?resize=1800,1200&w=1800"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;&emsp;Papa Roach，美國硬搖滾、另類金屬樂隊，來自加利福尼亞州瓦卡維爾。<br />&nbsp;&nbsp;處女專輯《Infest》於2000年發售，自此打響名堂。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/7A65ASxK8FMdNEFMQvRKG5" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox bgc">
                                        <th className="col-0 inTableTime">18:50 <br></br>19:40</th>
                                        <th className="col-3"> </th>
                                        <th className="col-3" >  
                                            <a id='Three_Days_Grace' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".Three_Days_Grace">Three Days Grace
                                            </a>
                                            <div className="modal fade Three_Days_Grace" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title Three_Days_Grace" id="" >Three Days Grace</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://pbs.twimg.com/media/ERPlp9dXUAAWZg8.jpg"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp; Three Days Grace，簡稱TDG，3DG，是來自加拿大的樂隊。樂隊前身是Groundswell，在1997年重組，活躍至今。
                                                                            <br />&emsp;目前寬限三天主唱的位置則由貝斯手Brad的弟弟Matt擔任新任主唱。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/13topfW33NjnACjnRiZBX7" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"> </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox ">
                                        <th className="col-0 inTableTime">19:40 <br></br>20:30</th>
                                        <th className="col-3" >  
                                            <a id='Fall_Out_Boy' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".Fall_Out_Boy">Fall Out Boy
                                            </a>
                                            <div className="modal fade Fall_Out_Boy" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title Fall_Out_Boy" id="" >Fall Out Boy</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://www.raveituptv.com/wp-content/uploads/2017/07/falloutboy_thumb.jpg"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;&emsp;Fall Out Boy他們是一支流行龐克、另類搖滾曲風的樂團，來自美國伊利諾州的芝加哥，在2001年組成。<br />&emsp;&emsp;樂團成員包括Patrick(主唱、吉他手)、
                                                                            Pete，（貝斯、主要作詞者）Joe（吉他手）、Andy（鼓手）。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/022DrG7Wp2PSCwzuD0bSzT" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"> </th>
                                        <th className="col-3" >  
                                            <a id='LinkinPark' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".LinkinPark">Linkin Park
                                            </a>
                                            <div className="modal fade LinkinPark" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title LinkinPark" id="" >Linkin Park</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://cdn.hk01.com/di/media/images/882946/org/037d10039984264085112416e99a1043.jpg/OrmuhECd36ZZcKP2NBrpRuclyNXVNX8hd7wSFne8EhY?v=w1920"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;聯合公園於1996年成立，2000年以首張專輯《混合理論》在主流音樂市場上獲得成功，並得到美國唱片業協會的鑽石認證。
                                                                            <br /> &emsp;聯合公園第三張專輯《末日警鐘 毀滅·新生》不再是新金屬的風格，而走向主流。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/4Gfnly5CzMJQqkUFfoHaP3" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox spec2">
                                        <th className="col-0 inTableTime">20:30 <br></br>21:20</th>
                                        <th className="col-3"> </th>
                                        <th className="col-3 forChilli" >  
                                            <a id='RedHotChilliPepper' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".RedHotChilliPeppers">Red Hot Chilli <br />Peppers
                                            </a>
                                            <div className="modal fade RedHotChilliPeppers" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title RedHotChilliPeppers" id="" >Red Hot Chilli Peppers</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://cms.kerrang.com/images/RHCP-with-John-Frusciante.jpg"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;Red Hot Chili Peppers<br />(RHCP)，是1983年成立於加州洛杉磯的美國另類搖滾樂團。<br />&emsp;現由主唱Anthony Kiedis、John Frusciante、貝斯手Michael "Flea" Balzary及Chad Smith組成。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/7xl50xr9NDkd3i2kBbzsNZ" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"> </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap ">
                                        <th className="col-0 inTableTime">21:20<br></br>22:10</th>
                                        <th className="col-3"> </th>
                                        <th className="col-3" >  
                                            <a id='TheBeatles' type="button" className='hrefColor' data-toggle="modal"
                                                data-target=".TheBeatles">The Beatles
                                            </a>
                                            <div className="modal fade TheBeatles" tabIndex="-1" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title TheBeatles" id="" >The Beatles</h5>

                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>

                                                        </div>

                                                        <div className="modal-body d-flex-row" >
                                                            <div className="container-fluid">
                                                                <div className="row d-flex">
                                                                    <div className="col-11 imgBox" >
                                                                        <img className='adjust' src="https://yaoyao.com.tw/v2/wp-content/uploads/2010/05/the-beatles.jpg"></img>
                                                                    </div>



                                                                    <div className="row mainArticle" >
                                                                        <div className="col-12-lg">
                                                                            &emsp;The Beatles是1960年在利物浦組建的一支英國搖滾樂團，
                                                                            被廣泛承認為史上最偉大、最有影響力的搖滾樂團，根植於噪音爵士樂和50年搖滾，披頭四探索了各種音樂類型，從流行謠曲到迷幻搖滾，經常創新地運用經典元素。
                                                                        </div>
                                                                    </div>

                                                                    <div className='socialMedia' >
                                                                        <div className="d-flex mediaIcons">
                                                                            <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                            <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                            <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                            <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                        </div>
                                                                        <div className=" spotify">
                                                                            <iframe src="https://open.spotify.com/embed/album/0ETFjACtuP2ADo6LFhL6HN" width="240" height="270" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="modal-footer mr-auto" >
                                                            <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </th>
                                        <th className="col-3"> </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBo bgc">
                                        <th className="col-0 inTableTime">22:10 <br></br>23:00</th>
                                        <th className="col-3"> </th>
                                        <th className="col-3"> </th>
                                        <th className="col-3"> </th>
                                    </tr>
                                    <tr className="d-flex flex-wrap myBox">
                                        <th className="col-0 inTableTime">23:10 <br></br>00:00</th>
                                        <th className="col-3"> </th>
                                        <th className="col-3"> </th>
                                        <th className="col-3"> </th>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="iAmHere2">
                                <button className="hereBtn2" onClick={this.changeTime}><FontAwesomeIcon icon={faCaretUp}  className='fontAwe'/></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            );
    }
}

export default TableDayTwo;