(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","gap":10,"data":{"defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false,"rate":1},"history":{},"name":"Player736"},"backgroundColorRatios":[0],"layout":"absolute","width":"100%","scripts":{"playAudioList":TDV.Tour.Script.playAudioList,"shareSocial":TDV.Tour.Script.shareSocial,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"translate":TDV.Tour.Script.translate,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"clone":TDV.Tour.Script.clone,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getKey":TDV.Tour.Script.getKey,"startMeasurement":TDV.Tour.Script.startMeasurement,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"resumePlayers":TDV.Tour.Script.resumePlayers,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowScore":TDV.Tour.Script.quizShowScore,"init":TDV.Tour.Script.init,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setLocale":TDV.Tour.Script.setLocale,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizStart":TDV.Tour.Script.quizStart,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"historyGoBack":TDV.Tour.Script.historyGoBack,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"createTween":TDV.Tour.Script.createTween,"quizFinish":TDV.Tour.Script.quizFinish,"getOverlays":TDV.Tour.Script.getOverlays,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initAnalytics":TDV.Tour.Script.initAnalytics,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"isPanorama":TDV.Tour.Script.isPanorama,"registerKey":TDV.Tour.Script.registerKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"downloadFile":TDV.Tour.Script.downloadFile,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"openLink":TDV.Tour.Script.openLink,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeJS":TDV.Tour.Script.executeJS,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setValue":TDV.Tour.Script.setValue,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPixels":TDV.Tour.Script.getPixels,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer},"height":"100%","class":"Player","children":["this.MainViewer","this.Container_28407ACD_39F1_2E37_41CB_9A9F4046AC7A"],"scrollBarMargin":2,"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"minWidth":0,"hash": "368f7d6a535f22ca772f5fd8ac531784e72641dff658980fca2977e924e16f86", "definitions": [{"paddingLeft":0,"backgroundOpacity":0,"paddingRight":0,"rollOverBackgroundColor":["#DB9B4D"],"rollOverBackgroundOpacity":0,"data":{"name":"VROOM VROOM"},"verticalAlign":"middle","backgroundColorRatios":[0,1],"rollOverFontColor":"#DB9B4D","pressedFontColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontWeight":"bold","width":149,"pressedBackgroundOpacity":0,"height":40,"class":"Button","fontSize":14,"iconWidth":32,"pressedBackgroundColorRatios":[0.00392156862745098],"label":trans('Button_263D27F2_39B1_65ED_4194_A07B5C7F81FB.label'),"minHeight":1,"minWidth":1,"iconHeight":32,"borderColor":"#000000","click":"var anim = this.anim_35DA1167_39D7_3AF3_41B0_686B9D803645; anim.set('finalFrame', 'first'); anim.set('animationDirection', 'normal'); anim.set('loop', true); anim.play(); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_19B86017_39BF_7A53_41CA_2F84E4C66FB9, 'hideEffect', false)}.bind(this); invisibleFunc(this.Button_263D27F2_39B1_65ED_4194_A07B5C7F81FB); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_198C17A8_39B1_267D_41C1_30332F42D0B2, 'showEffect', false)}.bind(this); visibleFunc(this.Button_263C4146_39B1_1A35_41C6_C6EB14CE64EC)","fontFamily":"Academy Engraved LET Plain:1.0","paddingTop":0,"layout":"horizontal","backgroundColor":["#000000","#000000"],"horizontalAlign":"center","id":"Button_263D27F2_39B1_65ED_4194_A07B5C7F81FB","paddingBottom":0,"fontColor":"#FFFFFF","rollOverBackgroundColorRatios":[0]},{"class":"FadeOutEffect","id":"effect_19B86017_39BF_7A53_41CA_2F84E4C66FB9","duration":500},{"scrollBarColor":"#000000","backgroundOpacity":0.6,"backgroundImageUrl":"skin/Container_28407ACD_39F1_2E37_41CB_9A9F4046AC7A.png","gap":10,"right":"0%","data":{"name":"--- MENU"},"children":["this.Image_28415ACC_39F1_2E35_41C9_2825544FDEA2","this.Container_2841CACD_39F1_2E37_41C8_0E816BA694F1","this.IconButton_28405ACD_39F1_2E37_41A6_893618CB24A8"],"height":"12.832%","class":"Container","scrollBarMargin":2,"minHeight":1,"minWidth":1,"layout":"absolute","id":"Container_28407ACD_39F1_2E37_41CB_9A9F4046AC7A","left":"0%","bottom":"0%"},{"paddingLeft":0,"backgroundOpacity":0,"paddingRight":0,"rollOverBackgroundColor":["#DB9B4D"],"rollOverBackgroundOpacity":0,"data":{"name":"VROOM VROOM"},"verticalAlign":"middle","backgroundColorRatios":[0,1],"rollOverFontColor":"#DB9B4D","pressedFontColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontWeight":"bold","width":149,"pressedBackgroundOpacity":0,"height":40,"class":"Button","fontSize":14,"iconWidth":32,"visible":false,"pressedBackgroundColorRatios":[0.00392156862745098],"label":trans('Button_263C4146_39B1_1A35_41C6_C6EB14CE64EC.label'),"minHeight":1,"minWidth":1,"iconHeight":32,"borderColor":"#000000","click":"var anim = this.anim_35DA1167_39D7_3AF3_41B0_686B9D803645; anim.set('finalFrame', 'first'); anim.stop(); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_19D8E30E_39BF_3E35_41C1_664FA07F613B, 'hideEffect', false)}.bind(this); invisibleFunc(this.Button_263C4146_39B1_1A35_41C6_C6EB14CE64EC); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_191D8A19_39B1_2E5F_41A0_BD73333A5A30, 'showEffect', false)}.bind(this); visibleFunc(this.Button_263D27F2_39B1_65ED_4194_A07B5C7F81FB)","fontFamily":"Academy Engraved LET Plain:1.0","paddingTop":0,"layout":"horizontal","backgroundColor":["#000000","#000000"],"horizontalAlign":"center","id":"Button_263C4146_39B1_1A35_41C6_C6EB14CE64EC","paddingBottom":0,"fontColor":"#FFFFFF","rollOverBackgroundColorRatios":[0]},{"paddingLeft":0,"backgroundOpacity":0,"paddingRight":0,"rollOverBackgroundColor":["#DB9B4D"],"rollOverBackgroundOpacity":0,"data":{"name":"side view"},"verticalAlign":"middle","backgroundColorRatios":[0,1],"rollOverFontColor":"#DB9B4D","pressedFontColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontWeight":"bold","width":113,"pressedBackgroundOpacity":0,"height":40,"class":"Button","fontSize":14,"iconWidth":32,"pressedBackgroundColorRatios":[0.00392156862745098],"label":trans('Button_28401ACD_39F1_2E37_41B2_1D648E24BAE8.label'),"minHeight":1,"minWidth":1,"iconHeight":32,"borderColor":"#000000","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_2620FBCF_39B7_EE33_41BA_1FB9BB3F9A03, {\"distance\":24.20489,\"x\":-0.65411,\"pitch\":-3.21,\"y\":3.1193,\"yaw\":86.36,\"z\":-4.88119}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","fontFamily":"Academy Engraved LET Plain:1.0","paddingTop":0,"layout":"horizontal","backgroundColor":["#000000","#000000"],"horizontalAlign":"center","id":"Button_28401ACD_39F1_2E37_41B2_1D648E24BAE8","paddingBottom":0,"fontColor":"#FFFFFF","rollOverBackgroundColorRatios":[0]},{"class":"FadeInEffect","id":"effect_191D8A19_39B1_2E5F_41A0_BD73333A5A30","duration":500},{"scrollBarColor":"#000000","paddingLeft":30,"backgroundOpacity":0,"gap":10,"data":{"name":"-button set container"},"layout":"horizontal","verticalAlign":"middle","children":["this.Button_2841DACD_39F1_2E37_41AE_23C99A26D018","this.Button_2841EACD_39F1_2E37_41C2_0BA6C337F312","this.Button_28400ACD_39F1_2E37_41C7_CA0D38F58DF2","this.Button_28401ACD_39F1_2E37_41B2_1D648E24BAE8","this.Button_263D27F2_39B1_65ED_4194_A07B5C7F81FB","this.Button_263C4146_39B1_1A35_41C6_C6EB14CE64EC"],"width":"53.77%","height":"31.68%","class":"Container","scrollBarMargin":2,"minHeight":1,"minWidth":1,"overflow":"scroll","id":"Container_2841CACD_39F1_2E37_41C8_0E816BA694F1","left":"0%","bottom":"0%"},{"paddingLeft":0,"backgroundOpacity":0,"paddingRight":0,"rollOverBackgroundColor":["#DB9B4D"],"rollOverBackgroundOpacity":0,"data":{"name":"frontview"},"verticalAlign":"middle","backgroundColorRatios":[0],"rollOverFontColor":"#DB9B4D","pressedFontColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontWeight":"bold","width":120,"pressedBackgroundOpacity":0,"height":40,"class":"Button","fontSize":14,"iconWidth":0,"pressedBackgroundColorRatios":[0],"label":trans('Button_2841DACD_39F1_2E37_41AE_23C99A26D018.label'),"minHeight":1,"minWidth":1,"iconHeight":0,"rollOverShadow":false,"borderColor":"#000000","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_2620FBCF_39B7_EE33_41BA_1FB9BB3F9A03, {\"distance\":14.58682,\"x\":0.03,\"pitch\":0,\"y\":2.9,\"yaw\":-0.27,\"z\":6.08}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","fontFamily":"Academy Engraved LET Plain:1.0","paddingTop":0,"layout":"horizontal","backgroundColor":["#000000"],"horizontalAlign":"center","id":"Button_2841DACD_39F1_2E37_41AE_23C99A26D018","paddingBottom":0,"fontColor":"#FFFFFF","rollOverBackgroundColorRatios":[0]},{"items":["this.Model3DPlayListItem_2620FBCF_39B7_EE33_41BA_1FB9BB3F9A03"],"class":"PlayList","id":"mainPlayList"},{"class":"FadeOutEffect","id":"effect_19D8E30E_39BF_3E35_41C1_664FA07F613B","duration":500},{"viewerArea":"this.MainViewer","class":"Model3DPlayer","id":"MainViewerModel3DPlayer"},{"class":"FadeInEffect","id":"effect_198C17A8_39B1_267D_41C1_30332F42D0B2","duration":500},{"subtitlesFontSize":"3vmin","toolTipPaddingTop":4,"toolTipBorderColor":"#767676","subtitlesBackgroundOpacity":0.2,"vrPointerSelectionTime":2000,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"playbackBarHeadHeight":15,"width":"100%","subtitlesBorderColor":"#FFFFFF","data":{"name":"Main Viewer"},"height":"100%","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingRight":6,"subtitlesFontFamily":"Arial","vrThumbstickRotationStep":20,"toolTipShadowColor":"#333138","progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressRight":"33%","progressOpacity":0.7,"propagateClick":false,"subtitlesGap":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarBottom":5,"id":"MainViewer","subtitlesBackgroundColor":"#000000","progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowColor":"#000000","subtitlesTextShadowOpacity":1,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","playbackBarHeadWidth":6,"progressBottom":10,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColor":["#3399FF"],"progressHeight":2,"subtitlesTextShadowHorizontalLength":1,"progressBorderSize":0,"playbackBarRight":0,"playbackBarHeadShadowOpacity":0.7,"vrPointerColor":"#FFFFFF","progressBarBorderRadius":2,"class":"ViewerArea","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderSize":0,"toolTipFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","minHeight":50,"firstTransitionDuration":0,"minWidth":100,"surfaceReticleColor":"#FFFFFF","progressBorderRadius":2,"vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"toolTipPaddingLeft":6,"playbackBarProgressBorderColor":"#000000","toolTipPaddingBottom":4,"playbackBarBackgroundOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowColor":"#000000","subtitlesBottom":50,"progressLeft":"33%","subtitlesTop":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBorderSize":0},{"paddingLeft":0,"backgroundOpacity":0,"paddingRight":0,"rollOverBackgroundColor":["#DB9B4D"],"rollOverBackgroundOpacity":0,"data":{"name":"perspective view"},"verticalAlign":"middle","backgroundColorRatios":[0,1],"rollOverFontColor":"#DB9B4D","pressedFontColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontWeight":"bold","width":163.5,"pressedBackgroundOpacity":0,"height":40,"class":"Button","fontSize":14,"iconWidth":32,"pressedBackgroundColorRatios":[0],"label":trans('Button_2841EACD_39F1_2E37_41C2_0BA6C337F312.label'),"minHeight":1,"minWidth":1,"iconHeight":32,"borderColor":"#000000","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_2620FBCF_39B7_EE33_41BA_1FB9BB3F9A03, {\"distance\":21.05,\"x\":0.1638,\"pitch\":-33.01,\"y\":4.03101,\"yaw\":-36.36,\"z\":-0.50145}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","fontFamily":"Academy Engraved LET Plain:1.0","paddingTop":0,"layout":"horizontal","backgroundColor":["#000000","#000000"],"horizontalAlign":"center","id":"Button_2841EACD_39F1_2E37_41C2_0BA6C337F312","paddingBottom":0,"fontColor":"#FFFFFF","rollOverBackgroundColorRatios":[0]},{"rollOverIconURL":"skin/IconButton_28405ACD_39F1_2E37_41A6_893618CB24A8_rollover.png","backgroundOpacity":0,"right":30,"data":{"name":"IconButton VR"},"verticalAlign":"middle","width":49,"height":37,"maxHeight":37,"class":"IconButton","iconURL":"skin/IconButton_28405ACD_39F1_2E37_41A6_893618CB24A8.png","minHeight":1,"maxWidth":49,"minWidth":1,"transparencyActive":true,"click":"var player = this.getActivePlayerWithViewer(this.getMainViewer()); if(player.get('class') == 'PanoramaPlayer') player.set('viewMode', 'cardboard')","horizontalAlign":"center","id":"IconButton_28405ACD_39F1_2E37_41A6_893618CB24A8","bottom":8},{"surfaceReticleRadius":0.02,"castShadow":true,"label":trans('model_358F07BE_39D7_2655_4197_7E97B6454B45.label'),"data":{"label":"scene","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"id":"model_358F07BE_39D7_2655_4197_7E97B6454B45","floorColor":"#FFFFFF","environmentURL":"media/model_358F07BE_39D7_2655_4197_7E97B6454B45/bg_1842168E_39DF_2635_41BF_D47FDD562633.jpg","animations":["this.anim_35DA1167_39D7_3AF3_41B0_686B9D803645","this.anim_35DA3167_39D7_3AF2_41CC_181B5856C631"],"surfaceSelectionCoef":2,"model":"this.res_35CF1176_39D7_3AD5_41C5_B6AE08EE0C62","surfaceReticleMaxRadius":50,"objects":[],"camera":"this.cam_35CB9177_39D7_3AD3_41C4_D9B960CE2208","backgroundColor":"#FFFFFF","thumbnailUrl":"media/model_358F07BE_39D7_2655_4197_7E97B6454B45_t.jpg","lights":["this.light_35F06177_39D7_3AD3_41C4_D65022B54552","this.light_35F10178_39D7_3ADD_41CA_1D68E588C784"],"environmentIntensity":0.67,"floorRadius":27.01,"surfaceReticleMinRadius":15,"class":"Model3D"},{"backgroundOpacity":0,"right":"0%","data":{"name":"white line"},"verticalAlign":"middle","height":2,"maxHeight":2,"class":"Image","minHeight":1,"maxWidth":3000,"minWidth":1,"scaleMode":"fit_outside","url":trans('Image_28415ACC_39F1_2E35_41C9_2825544FDEA2.url'),"horizontalAlign":"center","id":"Image_28415ACC_39F1_2E35_41C9_2825544FDEA2","bottom":53,"left":"0%"},{"paddingLeft":0,"backgroundOpacity":0,"paddingRight":0,"rollOverBackgroundColor":["#DB9B4D"],"rollOverBackgroundOpacity":0,"data":{"name":"bird view"},"verticalAlign":"middle","backgroundColorRatios":[0,1],"rollOverFontColor":"#DB9B4D","pressedFontColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontWeight":"bold","width":100,"pressedBackgroundOpacity":0,"height":40,"class":"Button","fontSize":14,"iconWidth":32,"pressedBackgroundColorRatios":[0.00392156862745098],"label":trans('Button_28400ACD_39F1_2E37_41C7_CA0D38F58DF2.label'),"minHeight":1,"minWidth":1,"iconHeight":32,"borderColor":"#000000","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_2620FBCF_39B7_EE33_41BA_1FB9BB3F9A03, {\"distance\":19.16854,\"x\":-0.43091,\"pitch\":-78.44,\"y\":5.05661,\"yaw\":0,\"z\":-4.47075}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","fontFamily":"Academy Engraved LET Plain:1.0","paddingTop":0,"layout":"horizontal","backgroundColor":["#000000","#000000"],"horizontalAlign":"center","id":"Button_28400ACD_39F1_2E37_41C7_CA0D38F58DF2","paddingBottom":0,"fontColor":"#FFFFFF","rollOverBackgroundColorRatios":[0.00392156862745098]},{"end":"this.trigger('tourEnded')","player":"this.MainViewerModel3DPlayer","id":"Model3DPlayListItem_2620FBCF_39B7_EE33_41BA_1FB9BB3F9A03","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","media":"this.model_358F07BE_39D7_2655_4197_7E97B6454B45"},{"id":"anim_35DA1167_39D7_3AF3_41B0_686B9D803645","name":"Car Rig|Car RigAction","index":0,"class":"Model3DAnimation"},{"autoplay":true,"id":"anim_35DA3167_39D7_3AF2_41CC_181B5856C631","name":"Car Rig|Sketchfab_modelAction","index":1,"class":"Model3DAnimation"},{"levels":[{"url":"media/model_358F07BE_39D7_2655_4197_7E97B6454B45/scene.glb","class":"Model3DResourceLevel"},{"class":"Model3DResourceLevel","url":"media/model_358F07BE_39D7_2655_4197_7E97B6454B45/scene_mobile.glb","tags":"mobile"}],"id":"res_35CF1176_39D7_3AD5_41C5_B6AE08EE0C62","class":"Model3DResource"},{"class":"OrbitModel3DCamera","maxPitch":3.6,"initialPitch":-27.01,"maxX":27.21,"rotationSpeed":1.52,"minY":-16.11,"initialDistance":12.53,"maxZ":59.63,"autoNearFar":true,"minPitch":-90,"maxDistance":21.05,"minDistance":12.53,"initialZ":3.29,"minX":-27.14,"maxY":21.92,"translationSpeed":2.28,"initialX":2.97,"initialY":4.01,"id":"cam_35CB9177_39D7_3AD3_41C4_D9B960CE2208","minZ":-47.46,"initialYaw":-35.54},{"shadowTolerance":2,"intensity":0.5,"castShadow":true,"pitch":45,"id":"light_35F06177_39D7_3AD3_41C4_D65022B54552","yaw":-45,"class":"OrbitLight"},{"shadowTolerance":2,"intensity":0.3,"castShadow":true,"pitch":75,"id":"light_35F10178_39D7_3ADD_41CA_1D68E588C784","yaw":135,"class":"OrbitLight"}],"watermark":false,"propagateClick":false,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.12.js.map
})();
//Generated with v2023.2.12, Thu May 2 2024