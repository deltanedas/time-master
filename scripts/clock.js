const clock = extendContent(Block, "clock", {
	buildConfiguration: function(tile, table){
		table.addImageButton(Icon.arrowLeftSmall, Styles.clearTransi, run(() => {
			tile.configure(-1);
		})).size(35);
		table.addImageButton(Icon.arrowRightSmall, Styles.clearTransi, run(() => {
			tile.configure(1);
		})).size(35);
	},

	configured: function(tile, player, value){
		this.hour += value * (1 / 24);
		this.hour %= 1;
	},

	update: function(tile){
		Vars.state.rules.ambientLight.a = Mathf.lerp(Vars.state.rules.ambientLight.a, this.hour, 0.1);
	},

	draw: function(tile){
		Draw.rect(Core.atlas.find("time-master-clock", tile.drawx(), tile.drawy());
		Lines.stroke(2, Color.scarlet);
		Lines.lineAngle(tile.drawx(), tile.drawy(), Vars.state.rules.ambientLight.a * 720, 6);
		Draw.color();
	}
});

clock.hour = Vars.state.rules.ambientLight.a;
