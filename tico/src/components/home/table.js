import React from 'react';

class LeagueTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [
                { position: 1, name: 'Tico', played: 10, won: 9, drawn: 1, lost: 0, points: 28 },
                { position: 2, name: 'Jericho', played: 10, won: 8, drawn: 2, lost: 0, points: 26 },
                { position: 3, name: 'Pumwani', played: 10, won: 8, drawn: 0, lost: 2, points: 24 },
                { position: 4, name: 'Kayole', played: 10, won: 7, drawn: 2, lost: 1, points: 23 },
                { position: 5, name: 'Mathare', played: 10, won: 6, drawn: 4, lost: 0, points: 21 },
                { position: 6, name: 'Makadara', played: 10, won: 6, drawn: 2, lost: 2, points: 20 },
                { position: 7, name: 'Eastleigh', played: 10, won: 5, drawn: 3, lost: 2, points: 18 },
                { position: 8, name: 'Kibera', played: 10, won: 4, drawn: 2, lost: 4, points: 14 },
                { position: 9, name: 'Dandora', played: 10, won: 3, drawn: 1, lost: 5, points: 10 },
                { position: 10, name: 'Karen', played: 10, won: 2, drawn: 2, lost: 6, points: 8 }
            ]
        };
    }

    render() {
        return (
            <div style={
                    {
                        
                        paddingInline: '15px',
                        lineHeight: '30px',
                        display: 'fle'
                    }
                }>
                <h2 >LEAGUE STANDINGS</h2>
                <table>
                    <thead style={{backgroundColor:'rgba(253, 234, 65, 0.767)'}}>
                        <tr >
                            <th>Pos</th>
                            <th style={{width: 50}}>Team</th>
                            <th style={{width: 50, paddingLeft: '10px'}}>MP</th>
                            <th style={{width: 50, backgroundColor: 'green'}}>W</th>
                            <th style={{width: 50}}>D</th>
                            <th style={{width: 50, backgroundColor: 'red'}}>L</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((team, index) => (
                            <tr key={index} style={{ textAlign: 'center'}}>
                                <td >{team.position}</td>
                                <td>{team.name}</td>
                                <td >{team.played}</td>
                                <td>{team.won}</td>
                                <td>{team.drawn}</td>
                                <td>{team.lost}</td>
                                <td>{team.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LeagueTable;
