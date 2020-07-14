renderCards = (data) => {
    return (
      <>
        {
          <div>
            {Object.keys(data).map((item, index) => {
              if (item.design_type === BIG_DISPLAY_CARD) {
                return <BigCard key={item.id} data={item} />;
              } else if (item.design_type === SMALL_CARD_WITH_ARROW) {
                return <SpinWheelCard key={item.id} data={item} />;
              } else if (item.design_type === CENTER_CARD) {
                return <CenterCard key={item.id} data={item} />;
              }
              // } else if (this.props.data.design_type === IMAGE_CARD) {
              //     cards.push(<ImageCard key={this.props.data.id} data={this.props.data} />);
              // } else if (this.props.data.design_type === CENTER_CARD) {
              //     cards.push(
              //         <CenterCard key={this.props.data.id} data={this.props.data} />
              //     );
              // }
              else if (item.design_type === SMALL_DISPLAY_CARD) {
                return <SmallCard key={item.id} data={item} />;
              }
            })}
          </div>
        }
      </>
    );
  };