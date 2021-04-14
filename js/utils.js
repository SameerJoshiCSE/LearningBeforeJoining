$(document).ready(function() {

	// TOOLTIPS
	$('[data-toggle="tooltip"]').tooltip();

	$('.specific-tip').tooltip({
		html: true,
  		placement: 'right',
  		trigger: 'click'
	});

	// POPOVERS
	$('[data-toggle="popover"]').popover();

	// DYNAMIC POPOVER
	const getAttr = (el, child) => {
  		return $(`.data-${child}`, $(el).attr('data-bind')).html();
	};

	$('.dynamic-popover').popover({
  		html: true,
  		placement: 'bottom',
  		title: function () {
    		return getAttr(this, 'title');
  		},
  		content: function () {
    		return getAttr(this, 'content');
  		}
	});

    // ACCOUNT MODAL VARIATIONS
    $('#feedback-modal').on('show.bs.modal', function (event) {
        var $button = $(event.relatedTarget);
        var $case = $button.data('case');
        var $modal = $(this);
        var feed=document.getElementById("feedbackbtn");

        if($case == "feedback") {
            feed.style.border="1px solid pink";
            feed.style.background="transparent";
            feed.style.color="pink";
        }
});

});
