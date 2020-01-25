const clock = extendContent(Block, "clock", {
	buildConfiguration: function(tile, table){
		table.addImageButton(Icon.leftSmall, Styles.clearTransi, run(() => {
			tile.configure(-1);
		})).size(35);
		table.addImageButton(Icon.rightSmall, Styles.clearTransi, run(() => {
			tile.configure(1);
		})).size(35);
	},

	configured: function(tile, player, value){
		this.hour += value * (1 / 24);
		this.hour %= 1;
	},

	update: function(tile){
		var tmp = Mathf.lerp(Vars.state.rules.ambientLight.a, this.hour, 0.1);
		if(tmp > 1){
			tmp = 1;
		}else if(tmp < 0){
			tmp = 0;
		}
		this.hour = tmp;
		Vars.state.rules.ambientLight.a = tmp;
	},

	draw: function(tile){
		Draw.rect(Core.atlas.find("time-master-clock"), tile.drawx(), tile.drawy());
		Lines.stroke(2, Color.scarlet);
		Lines.lineAngle(tile.drawx(), tile.drawy(), Vars.state.rules.ambientLight.a * 720, 6);
		Draw.color();
	}
});

clock.hour = Vars.state.rules.ambientLight.a;
