//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    address owner;

    mapping(uint256 => Election) public elections;
    mapping(uint256 => Candidate) public candidates;
    
    struct Election {
        uint256 election_id;
        string election_name;
        uint256 totalVotes;
    }

    uint256[] public electionIds;

    struct Candidate {
        uint256 candidate_id;
        uint256 candidate_electionId;
        string candidate_name;
        string candidate_party;
        uint256 candidate_votes;
    }

    uint256[] public candidateIds;

    // set the msg.sender to be the owner of the contract
    constructor() {
        owner = msg.sender;
    }

    // this modifier restricts access to functions to only owner
    modifier onlyOwner{
        require(msg.sender == owner, "You do not have the administrative rights to create elections");
        _;
    }

    // this function creates a new election
    function createElection(string memory _election_name, string[] memory _candidates,string[] memory _party) external onlyOwner {

        uint election_id = uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender))) % 1000;

        elections[election_id] = Election(election_id, _election_name, 0);
        electionIds.push(election_id);

        for(uint i=0; i < _candidates.length; i++){

            uint candidate_id = uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender))) % 1000 + (i+2);

            candidates[candidate_id] = Candidate(candidate_id, election_id, _candidates[i],_party[i], 0);
            candidateIds.push(candidate_id);

        }   

    }

    // this function is used to cast votes
    function castVote(uint256 _election_id, uint256 _candidate_id) external {

        // ensure that every candidate being voted for is an officially registered participant of the highlighted election
        require(candidates[_candidate_id].candidate_electionId == _election_id, "This candidate is not a recognized participant for this election");

        elections[_election_id].totalVotes += 1;
        candidates[_candidate_id].candidate_votes += 1;

    }

    // this function returns the total votes of the election
    function electionTotalVotes(uint256 _election_id) public view returns(uint256) {

        return elections[_election_id].totalVotes;

    }

    // this function returns the candidate's total votes
    function candidateTotalVotes(uint256 _candidate_id) public view returns(uint256) {

        return candidates[_candidate_id].candidate_votes;

    }

    // this function returns the current number of elections
    function totalElections() public view returns(uint) {
        
        return electionIds.length;

    }

    // this function returns the total number of contesting candidates
    function totalCandidates() public view returns(uint) {

        return candidateIds.length;
        
    }
}
