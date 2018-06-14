/*
 * Copyright (c) 2018
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function() {
	var TEMPLATE =
		'<ul class="locks"></ul>' +
		'<div class="clear-float mainFileInfoView"></div>' +
		'{{#each locks}}' +
		'<div>' +
		'<div style="display: inline;">{{owner}} has locked this resource via {{lockroot}}</div>' +
		// TODO: no inline css
		'<a href="#" class="unlock" style="float: right" title="{{unlockLabel}}"><span class="icon icon-lock-open" style="display: block" /></a>' +
		'</div>' +
		'{{else}}' +
		'<div class="empty">{{emptyResultLabel}}</div>' +
		'{{/each}}' +
		'';

	/**
	 * @memberof OCA.Files
	 */
	var LockTabView = OCA.Files.DetailTabView.extend(
		/** @lends OCA.Files.LockTabView.prototype */ {
		id: 'lockTabView',
		className: 'tab lockTabView',

		getLabel: function() {
			return t('files', 'Locks');
		},

		template: function(data) {
			if (!this._template) {
				this._template = Handlebars.compile(TEMPLATE);
			}

			return this._template(data);
		},

		/**
		 * Renders this details view
		 */
		render: function() {
			this.$el.html(this.template({
				emptyResultLabel: t('files', 'Resource is not locked'),
				locks: this.model.get('activeLocks'),
				model: this.model
			}));
		}
	});

	OCA.Files.LockTabView = LockTabView;
})();

