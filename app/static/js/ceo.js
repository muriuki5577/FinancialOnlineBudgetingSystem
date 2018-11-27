function fadeAllCeo(callBack) {
    if ($('.content-initial').css('display').toLowerCase() != 'none') {
        $('.content-initial').fadeOut(callBack);
    } else if ($('.content-create-department').css('display').toLowerCase() != 'none') {
        $('.content-create-department').fadeOut(callBack);
    } else if ($('.content-set-total-revenue').css('display').toLowerCase() != 'none') {
        $('.content-set-total-revenue').fadeOut(callBack);
    } else if ($('.content-review-financial-request').css('display').toLowerCase() != 'none') {
        $('.content-review-financial-request').fadeOut(callBack);
    } else if ($('.content-view-department-history').css('display').toLowerCase() != 'none') {
        $('.content-view-department-history').fadeOut(callBack);
    }
}

function graphButtonClicked() {
    $('.graph-button').fadeOut();
    fadeAllCeo(showInitialContent);
}

function createDptClicked() {
    $('.graph-button').fadeOut();
    fadeAllCeo(showCreateDepartmentContent);
}

function setTotalRevenueClicked() {
    $('.graph-button').fadeIn();
    fadeAllCeo(showSetTotalRevenue);
}

function reviewFDRequestsClicked() {
    $('.graph-button').fadeIn();
    fadeAllCeo(showReviewFDRequest);
}

function viewAllDepartmentHistoryClicked() {
    $('.graph-button').fadeIn();
    fadeAllCeo(showViewAllDeptHistory);
}

function showCreateDepartmentContent(callback) {
    $('.content-create-department').fadeIn(callback);
    fadeInGraphButton();
}

function showSetTotalRevenue(callback) {
    $('.content-set-total-revenue').fadeIn(callback);
    fadeInGraphButton();
}

function showReviewFDRequest(callback) {
    $('.content-review-financial-request').fadeIn(callback);
    fadeInGraphButton();
}

function showViewAllDeptHistory(callback) {
    $('.content-view-department-history').fadeIn(callback);
    fadeInGraphButton();
}