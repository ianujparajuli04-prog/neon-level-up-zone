import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Calendar, 
  Users, 
  DollarSign,
  Clock,
  Medal,
  Target,
  Zap,
  Crown,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import tournamentImage from "@/assets/tournament.jpg";

const Tournaments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingTournaments = [
    {
      id: 1,
      title: "FIFA 24 Championship",
      game: "FIFA 24",
      date: "2024-01-15",
      time: "6:00 PM",
      participants: "32 Players",
      prizePool: "NPR 25,000",
      entryFee: "NPR 500",
      status: "Open",
      color: "neon-blue"
    },
    {
      id: 2,
      title: "Call of Duty Warzone Battle",
      game: "COD Warzone",
      date: "2024-01-20",
      time: "7:00 PM", 
      participants: "16 Teams",
      prizePool: "NPR 40,000",
      entryFee: "NPR 800/team",
      status: "Filling Fast",
      color: "neon-purple"
    },
    {
      id: 3,
      title: "Valorant Esports League",
      game: "Valorant",
      date: "2024-01-25",
      time: "5:00 PM",
      participants: "12 Teams", 
      prizePool: "NPR 50,000",
      entryFee: "NPR 1000/team",
      status: "Open",
      color: "neon-green"
    },
    {
      id: 4,
      title: "Tekken 8 Fighting Championship",
      game: "Tekken 8",
      date: "2024-02-01",
      time: "8:00 PM",
      participants: "24 Players",
      prizePool: "NPR 30,000", 
      entryFee: "NPR 600",
      status: "Coming Soon",
      color: "neon-pink"
    }
  ];

  const pastWinners = [
    {
      tournament: "PUBG Mobile Championship",
      winner: "Team Phoenix",
      prize: "NPR 35,000",
      date: "Dec 2023",
      members: ["Ravi_Gaming", "Nepal_Sniper", "Kathmandu_King", "Victory_Seeker"]
    },
    {
      tournament: "FIFA 23 Ultimate Cup", 
      winner: "GamerBoy_Nepal",
      prize: "NPR 20,000",
      date: "Nov 2023",
      members: ["Solo Player"]
    },
    {
      tournament: "Free Fire Battle Royale",
      winner: "Lightning Bolts",
      prize: "NPR 28,000", 
      date: "Oct 2023",
      members: ["ThunderStorm", "LightSpeed", "BoltAction", "ElectricGamer"]
    }
  ];

  const tournamentFeatures = [
    {
      icon: Trophy,
      title: "Weekly Tournaments",
      description: "Regular competitions across multiple gaming titles"
    },
    {
      icon: Medal,
      title: "Professional Setup",
      description: "Tournament-grade equipment and streaming setup"
    },
    {
      icon: Crown,
      title: "Prize Pools",
      description: "Substantial cash prizes for winners and runners-up"
    },
    {
      icon: Award,
      title: "Ranking System", 
      description: "Track your progress with our leaderboard system"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "neon-green";
      case "Filling Fast": return "neon-pink";
      case "Coming Soon": return "neon-blue";
      default: return "neon-purple";
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${tournamentImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-gaming text-4xl md:text-6xl font-bold text-neon mb-6 animate-slide-up">
            Gaming Tournaments
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Compete with the best gamers in Nepal. Win amazing prizes and claim your title as champion!
          </p>
          <Button 
            asChild
            size="lg"
            className="btn-neon bg-neon-purple text-background hover:bg-neon-purple/80 font-rajdhani font-semibold text-xl px-8 py-6 animate-slide-up"
          >
            <Link to="/contact">Register Now</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-gaming">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tournamentFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="card-glow bg-card/50 backdrop-blur-sm border-neon-purple/20 hover:border-neon-blue/40 transition-all duration-300 group text-center"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-neon-purple/10 border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-neon-purple" />
                  </div>
                  <h3 className="font-gaming text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="flex bg-card/50 backdrop-blur-sm rounded-lg p-1 border border-neon-purple/20">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-3 rounded-md font-rajdhani font-semibold transition-all duration-300 ${
                  activeTab === "upcoming"
                    ? "bg-neon-purple text-background"
                    : "text-muted-foreground hover:text-neon-purple"
                }`}
              >
                Upcoming Tournaments
              </button>
              <button
                onClick={() => setActiveTab("winners")}
                className={`px-6 py-3 rounded-md font-rajdhani font-semibold transition-all duration-300 ${
                  activeTab === "winners"
                    ? "bg-neon-purple text-background"
                    : "text-muted-foreground hover:text-neon-purple"
                }`}
              >
                Past Winners
              </button>
            </div>
          </div>

          {/* Upcoming Tournaments Tab */}
          {activeTab === "upcoming" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingTournaments.map((tournament) => (
                <Card 
                  key={tournament.id}
                  className={`card-glow bg-card/50 backdrop-blur-sm border-${tournament.color}/20 hover:border-${tournament.color}/40 transition-all duration-300 group`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-gaming text-xl text-foreground mb-2">
                          {tournament.title}
                        </CardTitle>
                        <p className="text-muted-foreground font-rajdhani">
                          {tournament.game}
                        </p>
                      </div>
                      <Badge className={`bg-${getStatusColor(tournament.status)}/10 text-${getStatusColor(tournament.status)} border-${getStatusColor(tournament.status)}/20`}>
                        {tournament.status}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-neon-blue" />
                        <span className="text-sm text-muted-foreground">
                          {formatDate(tournament.date)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-neon-green" />
                        <span className="text-sm text-muted-foreground">
                          {tournament.time}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-neon-pink" />
                        <span className="text-sm text-muted-foreground">
                          {tournament.participants}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-neon-purple" />
                        <span className="text-sm text-muted-foreground">
                          {tournament.entryFee}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-neon p-3 rounded-lg text-center">
                      <p className="text-sm text-background/80 mb-1">Prize Pool</p>
                      <p className="font-gaming text-2xl font-bold text-background">
                        {tournament.prizePool}
                      </p>
                    </div>

                    <Button 
                      asChild
                      className={`w-full btn-neon bg-${tournament.color}/10 text-${tournament.color} border-${tournament.color} hover:bg-${tournament.color} hover:text-background font-rajdhani font-semibold`}
                    >
                      <Link to="/contact">Register for Tournament</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Past Winners Tab */}
          {activeTab === "winners" && (
            <div className="space-y-8">
              {pastWinners.map((winner, index) => (
                <Card 
                  key={index}
                  className="card-glow bg-card/50 backdrop-blur-sm border-neon-gold/20 hover:border-neon-gold/40 transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-neon-gold/10 border border-neon-gold/20 rounded-full">
                        <Trophy className="h-6 w-6 text-neon-gold" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-gaming text-xl text-foreground">
                          {winner.tournament}
                        </CardTitle>
                        <p className="text-muted-foreground">{winner.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Prize Won</p>
                        <p className="font-gaming text-lg font-bold text-neon-gold">
                          {winner.prize}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-4 items-center">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Champion:</p>
                        <p className="font-gaming text-lg font-semibold text-neon-gold">
                          {winner.winner}
                        </p>
                      </div>
                      {winner.members.length > 1 && (
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-2">Team Members:</p>
                          <div className="flex flex-wrap gap-2">
                            {winner.members.map((member, memberIndex) => (
                              <Badge 
                                key={memberIndex}
                                variant="outline" 
                                className="border-neon-blue/20 text-neon-blue"
                              >
                                {member}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold text-neon mb-6">
            Ready to Become a Champion?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join our upcoming tournaments and prove your gaming skills. Big prizes await the best players!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-neon bg-neon-gold text-background hover:bg-neon-gold/80 font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/contact">Join Tournament</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Link to="/services">Practice First</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournaments;